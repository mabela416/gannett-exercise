const express = require('express');
const profile = require('./profile.routes');
const content = require('./content.routes');

module.exports = () => {
  const app = express.Router();
  profile(app);
  content(app);

  return app;
};
