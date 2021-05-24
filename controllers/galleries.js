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
const streamifier = require('streamifier');
cloudinary.config(clConfig)
const mailer = require("nodemailer");


let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

// Get routes

router.get('/', isLoggedIn, async (req, res) =>{
    const allGalleries = await db.gallery.findAll({
        order: [["name", "ASC"]]
    })
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
        where: { id: req.params.id },
        include: [db.work]
    })
    res.render('galleries/single', {gallery: thisGallery, favorites: thisGallery.works})
})

//  Post Route

router.post('/favorite/:id', isLoggedIn, async (req,res)=>{
    const thisGallery = await db.gallery.findOne({
        where: {userId: req.user.id}
    })

    const thisWork = await db.work.findOne({
        where: {id: req.params.id},
        include: [db.user]
    })
    thisGallery.addWork(thisWork)
    console.log(thisWork)
    let emailRecipient = thisWork.user.dataValues.email
    console.log(emailRecipient)
    let mailOptions = {
        from: 'anthonymang7370@gmail.com',
        to: emailRecipient,
        subject: 'GalleryLink - Your work was added to favorites!',
        text: `Congrats! ${thisGallery.name} added your piece, ${thisWork.title}, to their collection of favorites.`
    }
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });

    res.redirect(`/works/${req.params.id}`)
})


// put routes
router.put('/setup', isLoggedIn, upload.single('imageUpload'), async (req, res) =>{
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
        const thisGallery = await db.gallery.findOne({
            where: {userId: req.user.id}
        })
        const updatedGallery = await thisGallery.update({
            profileImage: result.url,
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
    }
    // invoking upload function
    upload(req);

})


module.exports = router