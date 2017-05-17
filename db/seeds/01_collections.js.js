'use strict'

exports.seed = (knex) => {
  return knex('collections').del()
  .then(() => {
    return knex('collections').insert([{
      id:1,
      name: 'New Acquistions' ,
      pic_url: 'http://www1.seattleartmuseum.org/eMuseum/images/01-new-acquisitions.jpg',
    }, {
      id:2,
      name: 'Asian' ,
      pic_url: 'http://www1.seattleartmuseum.org/eMuseum/images/06-asian-art.jpg',
    }, {
      id:3,
      name: 'Native American' ,
      pic_url: 'http://www1.seattleartmuseum.org/eMuseum/images/12-native-american.jpg',
  }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('collections_id_seq', (SELECT MAX(id) FROM collections));"
    );
  });
};
