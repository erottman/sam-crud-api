const db = require('../db')

class Artwork {
  constructor () {}

  static getAll() {
    return db('artworks')
  }

  static getOne(id) {
    return db('artworks')
    .where('artworks.id', id)
    .first()
  }

  static destroy(id) {
    return db('artworks')
    .del()
    .where({id})
    .returning('*')
  }

  static create({artist_id, collections_id, title, year_created, pic_url}) {
    const artist ={artist_id, collections_id, title, year_created, pic_url}
    return db('artworks')
    .insert(artwork)
    .returning('*')
  }


}



module.exports = Artwork
