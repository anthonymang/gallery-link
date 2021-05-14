const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');

// Get Routes
router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.get('/logout', (req, res) => {
  req.logOut(); //removes session
  req.flash('success', 'See you next time!');
  res.redirect('/');
})


// Post Routes
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  successFlash: 'Welcome back',
  failureFlash: 'Either email or password is incorrect'
}))

router.post('/signup', async (req,res)=>{
  const { email, name, password } = req.body;

  try {
    const [user, created] = await db.user.findOrCreate({
      where: { email },
      defaults: { name, password }
    });
    if (created) {
        console.log(`----- ${user.name} was created -----`);
        const successObject = {
          successRedirect: '/',
          successFlash: `Welcome ${user.name}. Account was created and logging in...`
        }
        passport.authenticate('local', successObject)(req,res);

    } else {
      req.flash('error', 'Email already exists');
      res.redirect('/auth/signup');
    }

  } catch (error) {
    console.log('*********Error');
    console.log(error);
    req.flash('error', 'Something went wrong. Please try again.');
    res.redirect('/auth/signup')
  }

})

module.exports = router;
