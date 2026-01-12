import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from './interfaces/customers.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
    // this customer interface is a type of aray where we update data of customers
    private customers: Customer [] = [];
    
    //----- GET Method -----//
    // this method is used for get all customer detial
    getAllCustomers(): Customer[]{
        return this.customers;
    }
    
    //----- POST Method -----//
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

    //----- PUT Method -----//
    // this method is used to update the customer data by using the unique id
    updateCustomer(id: number, createCustomerDTO: CreateCustomerDTO){
        const index = this.customers.findIndex((s)=> s.id === id);
        if(index === -1) throw new NotFoundException('Customer is not Found');
        this.customers[index]= {id, ...createCustomerDTO};
        return this.customers[index];
    }
}
