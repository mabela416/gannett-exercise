const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const apicache = require('apicache');
const cache = apicache.middleware;

const config = require('./config');
const routes = require('./src/routes');

const { port } = config;

const app = express();

app.use(cookieParser());

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());

// Cache all routes for 5 minutes
app.use(cache('5 minutes'));
// Load API routes
app.use(config.api.prefix, routes());

app
  .listen(port, () => {
    console.log(`Server listening on ${port}`);
  })
  .on('error', err => {
    console.error(err);
    process.exit(1);
  });
