exports.up = function (knex) {
    return knex.schema.createTable('movies', table => {
        table.increments();
        table.string('name').notNullable().unique();
        table.integer('rating').notNullable();
        table.string('cover_image').notNullable().defaultTo('https://www.lyongaming.com/assets/og-27dc2b5479ef3878af48454a680bdd11.jpg');
        table.string('sinopsis');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('movies');
};

