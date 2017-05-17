const db = require('../db')

class Collection {
  constructor () {}

  static getAll() {
    return db('collections')
  }

  static getOne(id) {
    return db('collections')
    .where('collections.id', id)
    .first()
  }

  static destroy(id) {
    return db('collections')
    .del()
    .where({id})
    .returning('*')
  }

  static create({ name, pic_url }) {
    const artist ={name, pic_url}
    return db('collections')
    .insert(collection)
    .returning('*')
  }


}


module.exports = Collection
