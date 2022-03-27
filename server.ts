import express from 'express';
import {routes} from './src/router'

require('dotenv').config()

const app = express();
const port = 3000 || process.env.PORT;

// middleware
app.use(express.json());

//routes
app.use(routes.customerRouter)
app.use(routes.attendantRouter)


app.listen(port, () => {
  console.log(`the application is listening on port ${port}`)
})