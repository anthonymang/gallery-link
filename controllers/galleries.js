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


// Get routes

router.get('/', isLoggedIn, async (req, res) =>{
    const allGalleries = await db.gallery.findAll()
    res.render('galleries/index', {galleries: allGalleries})
})


router.get('/setup', isLoggedIn, async (req, res) => {
    console.log(req.user)
    if (req.user.usertype != 'gallery' || req.user.setupComplete == 'true') {
        res.redirect('/')
    } else {
        res.render('galleries/setup')
    }
    
})


router.get('/:id', isLoggedIn, async (req, res) =>{
    const thisGallery = await db.gallery.findOne({
        where: { id: req.params.id }
    })
    res.render('galleries/single', {gallery: thisGallery})
})

//  Post Route

router.post('/favorite/:id', isLoggedIn, async (req,res)=>{
    const thisGallery = await db.gallery.findOne({
        where: {userId: req.user.id}
    })

    const thisWork = await db.work.findOne({
        where: {id: req.params.id}
    })
    thisGallery.addWork(thisWork)

    res.redirect(`/works/${req.params.id}`)
})


// put routes
router.put('/setup', isLoggedIn, upload.single('imageUpload'), async (req, res) =>{
    // let streamUpload = (req) => {
    //     // returns new promise object to upload the file to cloudinary
    //     // if successful, resolve promise, else reject promise
    //     return new Promise((resolve, reject) => {
    //         let stream = cloudinary.uploader.upload_stream(
    //           (error, result) => {
    //             if (result) {
    //               resolve(result);
    //             } else {
    //               reject(error);
    //             }
    //           }
    //         );
    //         // makes req.file.buffer readable??
    //        streamifier.createReadStream(req.file.buffer).pipe(stream);
    //     });
    // };
    // writing upload file that uploads once streamUpload is complete
    // async function upload(req) {
        try {
        // let result = await streamUpload(req);
        // console.log(result);
        const thisGallery = await db.gallery.findOne({
            where: {userId: req.user.id}
        })
        const updatedGallery = await thisGallery.update({
            // profileImage: result.url,
            name: req.body.name,
            phone_number: req.body.phone_number,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            owner: req.body.owner,
            description: req.body.description,
            setupComplete: req.body.setupComplete
        })

        const thisUser = await db.user.findOne({
            where: {id: req.user.id}
        })

        const updatedUser = await thisUser.update({
            setupComplete: req.body.setupComplete
        })
        console.log(updatedGallery)
        console.log(updatedUser)
        res.redirect(`/`)
        } catch (err){
        console.log(err)
    }
    // }
    // invoking upload function
    // upload(req);

})


module.exports = router