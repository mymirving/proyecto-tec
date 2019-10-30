const  Koa = require ('Koa');
const apiRoutes = require('./routes/roustes');
const  app = new Koa();
const bodyparser = require('koa-bodyparser');
const   port = 3000;

app.use(bodyparser());
app.use(apiRoutes.routes());


const server = app.listen(port,() =>{
    console.log(`server listening on : https//localhost:${port}`);
});


 module.exports = server;
