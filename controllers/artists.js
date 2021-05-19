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
    try{
    const allArtists = await db.artist.findAll()
    res.render('artists/index', {artists: allArtists})
    console.log(req.user)
    } catch(err) {
        console.log(err)
    }
    
})

router.get('/setup', isLoggedIn, async (req, res) => {
    console.log(req.user)
    if (req.user.usertype != 'artist' || req.user.setupComplete == 'true') {
        res.redirect('/')
    } else {
        res.render('artists/setup')
    }
    
})

router.get('/:id', isLoggedIn, async (req, res) =>{
    try {
        const artist = await db.artist.findOne({
            where: {
                id: req.params.id
            },
            include: [db.work]
        })
        res.render('artists/single', {artist: artist, works: artist.works})
    } catch (error) {
        console.log(error)
    }
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
        const thisArtist = await db.artist.findOne({
            where: {userId: req.user.id}
            // include: [db.user]
        })
        
        const updatedArtist = await thisArtist.update({
            // profileImage: result.url,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            city: req.body.city,
            state: req.body.state,
            age: req.body.age,
            bio: req.body.bio,
        })

        const thisUser = await db.user.findOne({
            where: {id: req.user.id}
        })

        const updatedUser = await thisUser.update({
            setupComplete: req.body.setupComplete
        })
        console.log(updatedArtist)
        console.log(updatedUser)
        console.log(req.user)
        res.redirect(`/`)
        } catch (err){
        console.log(err)
    }
    // }
    // invoking upload function
    // upload(req);

})








module.exports = router