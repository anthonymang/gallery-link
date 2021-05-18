const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn')

// get routes
router.get('/', isLoggedIn, async (req, res) => {
    try{
    const allArtists = await db.user.findAll()
    res.render('artists/index', {artists: allArtists})
    console.log(req.user)
    } catch(err) {
        console.log(err)
    }
    
})

router.get('/setup', isLoggedIn, async (req, res) => {
    console.log(req.user)
    
    res.render('artists/setup')
})


router.get('/:id', isLoggedIn, async (req, res) =>{
    try {
        const artist = await db.user.findOne({
            where: {
                id: req.params.id
            },
            include: [db.work]
        })
        res.render('artists/profile', {artist: artist, works: artist.works})
    } catch (error) {
        console.log(error)
    }
})






module.exports = router