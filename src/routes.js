const router = require('express').Router();
const UserController = require('./controllers/UserController');

router.get('/users', UserController.List);
router.post('/users', UserController.Create);
router.put('/users/:id', UserController.Update);
router.delete('/users/:id', UserController.Delete);

module.exports = router;