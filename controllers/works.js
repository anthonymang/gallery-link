const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn')
// cloudinary imports
const multer = require('multer')
const upload = multer()
const clConfig = require('../cloudinary-config')
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
cloudinary.config(clConfig)


// get routes


router.get('/', isLoggedIn, async (req, res) => {
    const allWorks = await db.work.findAll({
        order: [["title", "ASC"]]
    })
    res.render('works/index', {works: allWorks})
})


router.get('/create', isLoggedIn, async (req, res) => {
    res.render('works/create')
})


router.get('/edit/:id', isLoggedIn, async (req, res)=>{
    const thisWork = await db.work.findOne({
        where: {id: req.params.id}
    })
    if (req.user.id != thisWork.userId){
        res.redirect('/')
    } else {
        res.render('works/edit', {work: thisWork})
    }
})

router.get('/:id', isLoggedIn, async (req, res)=>{
    const thisWork = await db.work.findOne({
        where: {
            id: req.params.id
        },
        include: [db.artist]
    })
    res.render('works/single', {work: thisWork})
})




// Post route
router.post('/create', isLoggedIn, upload.single('imageUpload'), async (req, res) =>{
    let streamUpload = (req) => {
        // returns new promise object to upload the file to cloudinary
        // if successful, resolve promise, else reject promise
        return new Promise((resolve, reject) => {
            let stream = cloudinary.uploader.upload_stream(
              (error, result) => {
                if (result) {
                  resolve(result);
                } else {
                  reject(error);
                }
              }
            );
            // makes req.file.buffer readable??
           streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
    };
    // writing upload file that uploads once streamUpload is complete
    async function upload(req) {
        try {
        let result = await streamUpload(req);
        const thisArtist = await db.artist.findOne({
            where: {userId: req.user.id}
        })
        const newWork = await thisArtist.createWork({
            imageFile: result.url,
            title: req.body.title,
            yearCreated: req.body.yearCreated,
            description: req.body.description,
            discipline: req.body.discipline,
        })

        const thisUser = await db.user.findOne({
            where: {id: req.user.id}
        })

        const addedWork = await thisUser.addWork(newWork)

        res.redirect(`/artists/${thisArtist.id}`)
        } catch (err){
        console.log(err)
    }
    }
    // invoking upload function
    upload(req);

})


// put route
router.put('/edit/:idx', isLoggedIn, async (req, res)=>{
    try {
        const thisWork = await db.work.findOne({
            where: {id: req.params.idx}
        })
        const updatedWork = await thisWork.update({
            title: req.body.title,
            yearCreated: req.body.yearCreated,
            description: req.body.description,
            discipline: req.body.discipline,
        })
        res.redirect(`/works/${req.params.idx}`)
    } catch (error) {
        console.log(error)
}})

// delete route


router.delete('/remove', isLoggedIn, async (req,res)=>{
    const thisGallery = await db.gallery.findOne({
        where: {
            userId: req.user.id
        }
    })
    const thisWork = await db.work.findOne({
        where: {
            id: req.body.id
        }
    })

    const removedWork = await thisGallery.removeWork(thisWork)
    res.redirect('/profile')

})


router.delete('/delete', isLoggedIn, async (req, res)=> {
    try {
        const deleted = await db.work.destroy({
            where:{ id: req.body.id }
        })
        res.redirect('/profile')
    } catch (error) {
        console.log(error)   
    }
})



module.exports = router