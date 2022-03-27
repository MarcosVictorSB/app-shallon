
import { Request, Response } from "express";
import { HttpStatusCode, HttpResponse } from "../../../protocols/";
import CustomerService from "../services/customer-service";
import { customerSchema } from "../validator";


const service = new CustomerService()

export default class CustomerController {

    async getCustomers(request: Request, response: Response): Promise<any> {        
        try {            
            const customers = await service.getCustomers();
            
            return response.status(HttpStatusCode.OK).json({ customers});      
        } catch (error) {
            console.log(error)
            return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: error});      
        }        
    }

    async create(request: Request, response: Response): Promise<any> {
        try {            
            const { name, email, password } = request.body;
            const customer = {
                name,
                email,
                password
            }
            const schema = customerSchema.validate(customer);
            if (schema.error) {
                return response.status(HttpStatusCode.BAD_REQUEST).json(schema.error.details)
            }

            const newCustomer = await service.create(customer);
            return response.status(HttpStatusCode.CREATED).json({ newCustomer }) 
        } catch (error) {
            return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({message: error})     
        }
    }
}