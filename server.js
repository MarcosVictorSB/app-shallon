require('dotenv').config();
const app = require('./app');


const port = process.env.PORT || 3000;

app.listen(`server is lintening on port ${port}`);