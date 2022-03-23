import CustomerRepository from "../repository/customer-repository"

const repository = new CustomerRepository()

export default class CustomerService {
    
    getCustomer(){
        return repository.getCustomer()
    }

    create(name: string) {        
        return repository.create(name)
    }
}
