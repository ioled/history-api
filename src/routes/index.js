const express = require('express');
const app = express();

// ----- Import all routes here -----
const historyRoute = require('./history');

// ----- Use all routes here -----
app.use(historyRoute);

// Export main router to use it in the main app.
module.exports = app;
