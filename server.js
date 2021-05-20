require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./config/ppConfig')
const isLoggedIn = require('./middleware/isLoggedIn')
const multer = require('multer')
const upload = multer()
const clConfig = require('./cloudinary-config')
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
cloudinary.config(clConfig)
const methodOverride = require('method-override');
const db = require('./models');

// Mailchimp
const mailchimpKey = process.env.MC_API_KEY
const mailchimpTx = require("@mailchimp/mailchimp_transactional")(mailchimpKey);


const SECRET_SESSION = process.env.SECRET_SESSION
// console.log(SECRET_SESSION)

app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(methodOverride('_method'));



app.use(session({
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) =>{
  console.log(res.locals)
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
})

async function run() {
  const response = await mailchimpTx.users.ping();
  console.log('-----Mailchimp Response-----')
  console.log(response);
}

run();



// ROUTES
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/auth', require('./controllers/auth'));
app.use('/artists', require('./controllers/artists'));
app.use('/works', require('./controllers/works'));
app.use('/galleries', require('./controllers/galleries'));




app.get('/profile', isLoggedIn, async (req, res)=>{
  if (req.user.usertype == 'gallery') {
    const thisGallery = await db.gallery.findOne({
      where: {
        userId: req.user.id
      },
      include: [db.work]
    })
    res.render('gallery-profile', {gallery: thisGallery, favorites: thisGallery.works});
  } else {
    const thisArtist = await db.artist.findOne({
      where: {
        userId: req.user.id
      },
      include: [db.work]
    })
    res.render('artist-profile', {artist: thisArtist, works: thisArtist.works})
  }
});


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
