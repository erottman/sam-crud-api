'use strict'

exports.seed = (knex) => {
  return knex('artworks').del()
  .then(() => {
    return knex('artworks').insert([{
      id:1,
      artist_id: 1,
      collections_id:1,
      title: 'THE CORNISH HILLS',
      year_created: '1911',
      pic_url: 'http://www1.seattleartmuseum.org/eMuseum/media/full/2005.160_01c.jpg',
    }, {
      id:2,
      artist_id: 2,
      collections_id:2,
      title: 'BANSHAN-TYPE URN',
      year_created: '2600',
      pic_url: 'http://www1.seattleartmuseum.org/eMuseum/media/full/51.194_01np.jpg',
    }, {
      id:3,
      artist_id: 3,
      collections_id:3,
      title: 'BENT-CORNER CHEST',
      year_created: '1860',
      pic_url: 'http://www1.seattleartmuseum.org/eMuseum/media/full/86.278_01c.jpg',
  }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('artworks_id_seq', (SELECT MAX(id) FROM artworks));"
    );
  });
};
