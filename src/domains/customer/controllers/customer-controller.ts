
import { Request, Response } from "express";
import { HttpStatusCode, HttpResponse } from "../../../protocols/http";
import CustomerService from "../services/customer-service";


const service = new CustomerService()

export default class CustomerController {
  
    getCustomers(request: Request, response: Response): any {        
        try {
            const customers = service.getCustomers();
            return response.status(HttpStatusCode.OK).json({ customers})          
        } catch (error) {
            return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: error})          
        }
        
    }

    create(request: Request, response: Response): any {
        try {
            const { name } = request.body;
            const customer = service.create(name);
            return response.status(HttpStatusCode.CREATED).json({ customer }) 
        } catch (error) {
            return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({message: error})     
        }
    }
}