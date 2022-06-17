
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { username: 'teste' },
    { username: 'teste2' },
  ]);
};
