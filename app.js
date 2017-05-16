const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const artists = require('./routes/artists')
const path = require('path');

const listener = (req, res) => {
  console.log('Hi. I am listening.')
}

app.use('/artists', artists);



app.listen(port, listener)
