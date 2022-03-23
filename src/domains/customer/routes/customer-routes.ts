import { Router } from 'express';
import CustomerController from '../controllers/customer-controller';


const customerRouter = Router();

const controller = new CustomerController()

customerRouter
  .get('/api/v1/customers/', controller.getCustomers)
  .post('/api/v1/customers/', controller.create)


export default customerRouter;