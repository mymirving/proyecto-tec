// Update with your config settings.
const path = require('path');
const BASE_BATH = path.join(__dirname, 'src', 'server', 'db')
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:mymirving@localhost:5432/movies_db',
    migrations: {
      directory: path.join(BASE_BATH, 'migrations')
  
      
    },
    seeds:{
      directory: path.join(BASE_BATH, 'seeds')
  
    }
  }
};
