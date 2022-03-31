import { Router } from 'express';
import CustomerController from '../controllers/customer-controller';


const customerRouter = Router();

const controller = new CustomerController()

customerRouter
  .post('/login', controller.login)
  .post('/', controller.create)
  .get('/', controller.getCustomers)
  


export default customerRouter;