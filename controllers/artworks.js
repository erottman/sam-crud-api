const Artworks = require('../models/artwork')


const getAll = (req,res) => {
  Artworks.getAll()
  .then(artworks => {
    res.json(artworks)
  })
}

const getOne = (req,res) => {
  const id = req.params.id

  Artworks.getOne(id)
  .then(artwork => {
    res.json(artwork)
  })
}

const destroy = (req,res) => {
  const id = req.params.id

  Artworks.destroy(id)
  .then(([artwork]) => {
    res.json(artwork)
  })
}

const create = (req,res) => {
  Artworks.create(req.body)
  .then(([artwork]) => {
    res.json(artwork)
  })
}

module.exports = { getAll, getOne, destroy, create }
