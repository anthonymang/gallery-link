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
router.get('/create', isLoggedIn, async (req, res) => {
    res.render('works/create')
})

router.get('/:id', isLoggedIn, async (req, res)=>{
    const thisWork = await db.work.findOne({
        where: {
            id: req.params.id
        },
        include: [db.user]
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
        console.log(result);
        const thisUser = await db.user.findOne({
            where: {id: req.user.id}
        })
        const newWork = await thisUser.createWork({
            imageFile: result.url,
            title: req.body.title,
            createdDate: req.body.createdDate,
            description: req.body.description
        })
        console.log(newWork)
        res.redirect(`/artists/${req.user.id}`)
        } catch (err){
        console.log(err)
    }
    }
    // invoking upload function
    upload(req);

})

module.exports = router