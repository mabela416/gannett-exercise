const ContentController = require('../controllers/content.controller');
const express = require('express');
const router = express.Router();

module.exports = app => {
  app.use('/content', router);
  router.get('/:id', ContentController.getContentById);
};
