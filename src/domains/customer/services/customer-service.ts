import CustomerRepository from "../repository/customer-repository"
import { CustomerCreate } from "../types"

const repository = new CustomerRepository()


export default class CustomerService {

    async getCustomers(): Promise<any>{
        return await repository.getCustomers();
    }

    create(customer: CustomerCreate) {
        return repository.create(customer);      
    }
}
