
exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.text('username').unique().notNullable()
});


exports.down = knex => knex.schema.dropTable('users');
