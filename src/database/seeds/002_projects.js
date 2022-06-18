
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('projects').del()
    await knex('projects').insert([
    { 
        title: 'new project',
        user_id: 4
    },
     
    ]);
  };
  
