
exports.up = (knex, Promise) => {
  return knex.schema.createTable('artworks', (table) => {
    table.increments()
    table.string('artist_id')
    table.string('collections_id')
    table.string('title')
    table.string('year_created')
    table.string('pic_url')
    table.timestamps(true, true)
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('artworks')
};
