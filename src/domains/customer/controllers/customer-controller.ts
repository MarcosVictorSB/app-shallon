
import { Request, Response } from "express";
import { CustomerEnumHelper } from "../../../helpers/enum-helper";
import { HttpStatusCode, HttpResponse } from "../../../protocols/";
import CustomerService from "../services/customer-service";
import { customerSchema } from "../validator";
import { createHash, compareHash } from '../../../hash'

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

            const newCustomer = {
                name,
                email,
                password
            }
            const schema = customerSchema.validate(newCustomer);
            if (schema.error) return response.status(HttpStatusCode.BAD_REQUEST).json(schema.error.details)
            
            const customer = await service.getCustomerByEmail(newCustomer.email);
            if(customer) return response.status(HttpStatusCode.CONFLICT).json({ message: CustomerEnumHelper.EMAIL_ALREADY_REGISTERED })

            const hash = createHash(newCustomer.password);
            newCustomer.password = hash;
            

            const customerCreated = await service.create(newCustomer);
            return response.status(HttpStatusCode.CREATED).json({ customerCreated }) 
        } catch (error) {
            return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({message: error})     
        }
    }

    async login(request:Request, response): Promise<any> {
        try {
            const { email, password } = request.body;
            const customer = await service.getCustomerByEmail(email);
            
            if(!customer) return response.status(HttpStatusCode.NOT_FOUND).json({ message: CustomerEnumHelper.NOT_FOUND_USER })
            
            const isValid = compareHash(password, customer.password);
            if(!isValid) return response.status(HttpStatusCode.FORBIDDEN).json({ message: CustomerEnumHelper.WRONG_CRENDENTIAL })

            return response.status(HttpStatusCode.OK).json({ message: customer})
            
        } catch (error) {
            return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: error })
        }
    }

    
}