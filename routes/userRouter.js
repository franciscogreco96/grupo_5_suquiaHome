const express= require('express');
const router= express.Router();

const userController= require('../controllers/userController.js');

router.get('/login',mainController.index);

router.get('/register',mainController.index);

module.exports = router;

