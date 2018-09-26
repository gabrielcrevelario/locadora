
const router = require('express').Router();
const UserController = require('../controllers/UserController');
 module.exports = (app) => {
    router.get('/', UserController.findUsers);
    router.post('/', UserController.createUser);
    app.use('/api/users', router);
 }
