const customers =  [
    {
        id: 1,
        name: 'Customer 1'
    },
    {
        id: 2,
        name: 'Customer 2'
    },
    {
        id: 3,
        name: 'Customer 3'
    }
]

interface Customer {
    id: number;
    name: string
}


export default class CustomerRepository {
  

  getCustomer(): Customer[]{
    return customers;
  }

  create(name: string): Customer[]{
    const id = customers.length;
    const newCustomer = {
        id: id,
        name: name
    }
    customers.push(newCustomer);
    return customers
  }
}