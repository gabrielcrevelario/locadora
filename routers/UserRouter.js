
const router = require('express').Router();
const UserController = require('../controllers/UserController');
 module.exports = (app) => {
    router
    .route('/')
    .get(UserController.findUsers)
    .post(UserController.createUser);
    app.use('/api/users', router);
 }
