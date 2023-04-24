const express = require('express');
const userRoute = require('../controllers/User/user.route');
const router = express.Router();

router.use('/user', userRoute)


module.exports =  router;