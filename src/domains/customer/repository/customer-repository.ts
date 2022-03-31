import db from '../../../models';
import { customError } from '../../../helpers/custom-error';
import { CustomerCreate } from '../types';
const Customer = 'Customer';

type CustomerRepositoryResult = {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date
}

export default class CustomerRepository {
    async getCustomers(): Promise<CustomerRepositoryResult>{
        return await db.Customer.findAll();      
    }

    async create(customer: CustomerCreate): Promise<any>{
        return await db.Customer.create(customer);       
    }

    async getCustomerByEmail(email: string): Promise<any> {
        return await  await db.Customer.findOne({ where: { email: email } });
    }
}