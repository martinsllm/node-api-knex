
exports.up = knex => knex.schema.table('users', table => {
    table.timestamps(true, true)
});


exports.down = knex => knex.schema.dropTable('users');
