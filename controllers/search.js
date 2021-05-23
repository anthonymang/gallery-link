const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn')
const { Op } = require("sequelize");



  
router.get('/results', isLoggedIn, async (req,res)=>{
    console.log(req.query)
    let results = []
    let target = req.query.target
    if (req.query.search == 'gallery'){
        results = await db.gallery.findAll({
        where: {
            [target]: {
                [Op.iLike]: `%${req.query.query}%` }
        }
    })
    } else if (req.query.search == 'artist'){
        results = await db.artist.findAll({
        where: {
            [target]: {
                [Op.iLike]: `%${req.query.query}%` }
        }
    })
    } else {
        if (target == 'yearCreated') {
            results = await db.work.findAll({
                where:  { 
                    yearCreated: req.query.query}
                    
                })
            } else {
        
        results = await db.work.findAll({
            where:  { 
                [target]: {
                    [Op.iLike]: `%${req.query.query}%`}
                }
            })
        }
    }
        console.log(results)
    res.render('search/results', {searchResults: results})
  })

  module.exports = router