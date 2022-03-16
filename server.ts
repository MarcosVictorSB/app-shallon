import express from 'express';
import {customerRoutes} from './src/routes/customer';

require('dotenv').config()




const app = express();
const port = 3000 || process.env.PORT;

// middleware
app.use(express.json());

//routes
app.use('/api/v1/customers', customerRoutes)

app.get('/', (request, response) => {
  response.send('deu certo');
})

app.listen(3000, () => {
  console.log(`the application is listening on port ${port}`)
})