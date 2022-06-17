const router = require('express').Router();
const UserController = require('./controllers/UserController');

router.get('/users', UserController.List);
router.post('/users', UserController.Create);

module.exports = router;