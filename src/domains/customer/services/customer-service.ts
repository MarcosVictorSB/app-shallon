import CustomerRepository from "../repository/customer-repository"

const repository = new CustomerRepository()

export default class CustomerService {
    
    getCustomers(){
        return repository.getCustomers()
    }

    create(name: string) {        
        return repository.create(name)
    }
}
