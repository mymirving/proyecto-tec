const knex = require('../connetion');

const getallMovies = () => {
    return knex('movies').select('*');
}
const getMovie = id => {
    return knex('movies').select('*').where({ id: parseInt(id) })
}
const createMovie = movie => {
    return knex('movies').insert(movie).returning('*');

}
const updateMovie = (id, movie) => {
    return knex('movies').update(movie).where({ id: parseInt(id) }).returning('*');
}

const deletemovie = id => {
    return knex('movies').del().where({ id: parseInt(id) }).returning('*')

}
module.exports = {
    getallMovies,
    getMovie,
    createMovie,
    updateMovie,
    deletemovie
}
