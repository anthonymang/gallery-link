const express = require('express')
const axios = require('axios');

axios.get(`https://api.artic.edu/api/v1/artworks?page=1&limit=1`)
.then(response => {
    console.log(response.data)
})

