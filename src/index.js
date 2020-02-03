const express = require('express');
const expressConfig = require('./config/express');
const cors = require('cors')({
  origin: true,
});

const PORT = process.env.PORT;

if (PORT === undefined) {
  console.log('[History API][Env Vars][Error]: There is no port in ENV vars');
  process.exit(1);
}

// Create the express app and load all middlewares and configurations.
const historyApi = express();
historyApi.use(cors);
expressConfig(historyApi);

module.exports = {
  historyApi,
};
