
import { Request, Response } from "express";
import { CustomerEnumHelper } from "../../../helpers/enum-helper";
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

            const newCustomer = {
                name,
                email,
                password
            }
            const schema = customerSchema.validate(newCustomer);
            
            const customer = await service.getCustomerByEmail(newCustomer.email);
            if(customer) return response.status(HttpStatusCode.CONFLICT).json({ message: CustomerEnumHelper.EMAIL_ALREADY_REGISTERED })

            
            if (schema.error) return response.status(HttpStatusCode.BAD_REQUEST).json(schema.error.details)

            const customerCreated = await service.create(newCustomer);
            return response.status(HttpStatusCode.CREATED).json({ customerCreated }) 
        } catch (error) {
            return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({message: error})     
        }
    }

            const newCustomer = await service.create(customer);
            return response.status(HttpStatusCode.CREATED).json({ newCustomer }) 
        } catch (error) {
            return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({message: error})     
        }
    }
}