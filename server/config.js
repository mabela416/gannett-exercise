require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

module.exports = {
  port: process.env.PORT || 3001,
  api: {
    prefix: '/api'
  }
};
