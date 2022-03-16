const express = require('express')
const customer = require('./src/routes/customer');

const app = express();

//midleware
app.use(express.json());

// routes
app.use('/api/v1/customer', customer)

// routes(app);

module.exports = app;

