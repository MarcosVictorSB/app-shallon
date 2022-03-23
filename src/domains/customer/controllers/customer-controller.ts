import { Request, Response } from "express";
import CustomerRepository from "../repository/customer-repository";
import CustomerService from "../services/customer-service";

const service = new CustomerService()

export default class CustomerController {
  
    getCustomer(request: Request, response: Response): any {
        try {
            const customer = service.getCustomer();
            response.status(200).json({customer})     
        } catch (error) {
            response.status(500).json({message: error})     
        }
       
    }

    create(request: Request, response: Response): any {
        try {
            const { name } = request.body;
            const customer = service.create(name);
            response.status(201).json({customer}) 
        } catch (error) {
            response.status(500).json({message: error})     
        }
    }
}