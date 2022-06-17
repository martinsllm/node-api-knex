const knex = require('../database');

module.exports = {

    async List(req, res) {
        try {
            const results = await knex('users');
            return res.json(results);
            
        } catch (error) {
            return res.status(500).json({'MESSAGE': error})
        }
    },

    async Create(req, res) {
        try {
            await knex('users').insert({...req.body});
            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'MESSAGE': error})
        }
    }

}