const express = require('express');
const userController = require('./user.controller');

const router = express.Router();

router
  .route('/')
  .post(userController.createUser)
  .get( userController.getData);

module.exports = router
