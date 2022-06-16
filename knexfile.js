// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite3'
    },
    migrations: {
        directory: `${__dirname}/src/database/migrations` 
    }
  },
  
};
