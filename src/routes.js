const router = require('express').Router();
const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');

router
    //Users
    .get('/users', UserController.List)
    .post('/users', UserController.Create)
    .put('/users/:id', UserController.Update)
    .delete('/users/:id', UserController.Delete)
    //Projects
    .get('/projects', ProjectController.List)

module.exports = router;