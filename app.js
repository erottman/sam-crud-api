const express = require('express')
const app = express()

const listener = (req, res) => {
  console.log('Hi. I am listening.')
}

app.listen(3000, listener)
