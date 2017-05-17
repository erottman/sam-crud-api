const Collections = require('../models/collection')

const getAll = (req,res) => {
  Collections.getAll()
  .then(collections => {
    res.json(collections)
  })
}

const getOne = (req,res) => {
  const id = req.params.id

  Collections.getOne(id)
  .then(collection => {
    res.json(collection)
  })
}

const destroy = (req,res) => {
  const id = req.params.id

  Collections.destroy(id)
  .then(([collection]) => {
    res.json(collection)
  })
}

const create = (req,res) => {
  Collections.create(req.body)
  .then(([collection]) => {
    res.json(collection)
  })
}

module.exports = { getAll, getOne, destroy, create }
