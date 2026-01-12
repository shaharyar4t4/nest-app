import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customers.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
    // this customer interface is a type of aray where we update data of customers
    private customers: Customer [] = [];

    // this method is used for get all customer detial
    getAllCustomers(): Customer[]{
        return this.customers;
    }
    
    // CreateCustomerDTO is type of valider or specfic rule which apply to fetch data
    // phela dto se check hoga Data thik aarha ha kiya nhi ? --> then move from database
    addCustomer(createCustomerDTO: CreateCustomerDTO):
    Customer{
        const newCustomer: Customer ={
            ...createCustomerDTO,
            id: Date.now(),
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }
}
