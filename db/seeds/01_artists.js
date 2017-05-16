'use strict'

exports.seed = (knex) => {
  return knex('artists').del()
  .then(() => {
    return knex('artists').insert([{
      id:1,
      first_name: 'John' ,
      last_name: 'Smith',
      nationality: 'Canadian',
    }, {
      id:2,
      first_name: 'Mary' ,
      last_name: 'Jane',
      nationality: 'Spanish',
    }, {
      id:3,
      first_name: 'Kitty' ,
      last_name: 'Kat',
      nationality: 'French',
  }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('artists_id_seq', (SELECT MAX(id) FROM artists));"
    );
  });
};
