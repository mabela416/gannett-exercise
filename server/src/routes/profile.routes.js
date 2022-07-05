const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profile.controller');

module.exports = app => {
  app.use('/profile', router);
  router.get('/', ProfileController.getProfile);
};
