const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const artists = require('./routes/artists')
const artworks = require('./routes/artworks')
const collections = require('./routes/collections')
const path = require('path')
const bodyParser = require('body-parser')

const listener = (req, res) => {
  console.log('Hi. I am listening.')
}

app.use(bodyParser.json());
app.use('/artists', artists);
app.use('/artworks', artworks);
app.use('/collections', collections);



app.listen(port, listener)
