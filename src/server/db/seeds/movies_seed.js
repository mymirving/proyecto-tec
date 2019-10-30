
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, name :'harrypotter',sinopsis:'magos magia',rating : 5,cover_image:'https://elcomercio.pe/resizer/f6doGoXuypP1qT1m3fuzBAosLks=/940x569/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TRY2CQHRVFDJLIAGVTQHDQBJRM.jpg'},
        {id: 2, name: 'spider man',sinopsis:'hombre araña',rating: 10,cover_image:'https://elcomercio.pe/resizer/f6doGoXuypP1qT1m3fuzBAosLks=/940x569/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TRY2CQHRVFDJLIAGVTQHDQBJRM.jpg'},
        {id: 3, name: 'star wars',sinopsis:'la guerra de las galaxias',rating: 7,cover_image:'https://elcomercio.pe/resizer/f6doGoXuypP1qT1m3fuzBAosLks=/940x569/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TRY2CQHRVFDJLIAGVTQHDQBJRM.jpg'}
        
      ]);
    });
};
