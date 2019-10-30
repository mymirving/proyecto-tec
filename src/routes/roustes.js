const Router = require('koa-router');
const router = new Router();
const queries = require('../server/db/queries/movies')

router.get('/', async ctx => {
    ctx.type = 'applicacion/json';
    ctx.body = {
        status: 'succes 1',
        message: 'taller de koa.js2 '
    }
})

router.get('/movies/:id', async ctx => {
    ctx.type = 'application/json'
    try {
        const movie = await queries.getMovie(ctx.params.id)
        if (!movie.length) {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'la pelicula no existe'
            }
            return;

        }
        ctx.type = 200;
        ctx.body = {
            status: 'success',
            data: movie
        }
    } catch (error) {
        ctx.status = 404;
        ctx.body = {
            status: 'error',
            message: 'la pelicula no existe'
        }
    }
})

router.get('/movies', async ctx => {
    try {
        const movies = await queries.getallMovies();

        ctx.type = 'applicacion/json';
        ctx.body = {
            status: 'succes 1',
            data: movies

        }
    } catch (error) {

        ctx.status = 404;
        ctx.body = {
            status: 'not found',
            error
        }

    }
})

router.post('/', async ctx => {
    ctx.type = 'applicacion/json';
    ctx.state = 201;
    ctx.body = {
        status: 'succes2 ',
        message: 'taller de koa.js 2'
    }
})

router.post('/movies', async ctx => {
    ctx.type = 'applicacion/json';
    try {
        const movie = await queries.createMovie(ctx.request.body)
        if (movie.length) {
            ctx.status = 201;
            ctx.body = {
                status: 'success',
                message: 'la pelicula fue creada correctamente',
                data: movie

            }
        } else {
            ctx.status = 422;
            ctx.body = {
                status: 'error',
                message: 'algo salio mal'
            }

        }
    } catch (error) {
        ctx.status = 422;
        ctx.body = {
            status: 'error',
            message: 'algo salio mal'

        }
    }
})

router.put('/movies/:id', async ctx => {
    ctx.type = 'application/json';
    try {
        const { id } = ctx.params
        const { body } = ctx.request
        const updatedmovie = await queries.updateMovie(id, body);
        if (updatedmovie.length) {
            ctx.status = 201;
            ctx.body = {
                status: 'success',
                message: 'la pelicual fue actulizada correctamente',
                date: updatedmovie
            }

        }
    } catch (error) {
        ctx.status = 404;
        ctx.body = {
            status: 'error',
            message: 'la pelicula no fue encontrada',
            status: 'error'
        }
    }



}
)



router.put('/', async ctx => {
    ctx.type = 'applicacion/json';
    ctx.state = 201;
    ctx.body = {
        status: 'succes2 ',
        message: 'esto es una actualizaion'
    }
})
router.delete('/movies/:id', async ctx => {
    ctx.type = 'applicacion/json';
    try {
        const { id } = ctx.params
        console.log(id)
        const deletemovie = await queries.deletemovie(id)
        if (deletemovie.length) {
            ctx.status = 201;
            ctx.body = {
                status: 'success',
                message: 'la pelicula fue eliminada correctamente',
                date: deletemovie
            }
        }
    } catch (error) {
        ctx.status = 404;
        ctx.body = {
            status: 'error',
            message: 'la pelicula no fue eliminada correctamente',
            status: 'error'

        }

    }
})




router.delete('/', async ctx => {
    ctx.type = 'applicacion/json';
    ctx.state = 201;
    ctx.body = {
        status: 'succes2 ',
        message: 'esto se va borrar'
    }
})

module.exports = router;
