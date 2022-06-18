const knex = require('../database');

module.exports = {

    async List(req, res, next) {
        try {
            const results = await knex('users');
            return res.json(results);
        } catch (error) {
            next(error);
        }
    },

    async Create(req, res, next) {
        try {
            await knex('users').insert({...req.body});
            return res.status(201).json();
        } catch (error) {
            next(error);
        }
    }

}