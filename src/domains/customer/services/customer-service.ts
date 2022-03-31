import CustomerRepository from "../repository/customer-repository"
import { CustomerCreate } from "../types"

const repository = new CustomerRepository()


export default class CustomerService {

    async getCustomers(): Promise<any>{
        return await repository.getCustomers();
    }

    async create(customer: CustomerCreate) {
        return await repository.create(customer);      
    }

    async getCustomerByEmail(email: string): Promise<any> {
        return await repository.getCustomerByEmail(email);
    }

}
