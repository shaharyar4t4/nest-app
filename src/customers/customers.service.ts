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

    //---GET Method by ID ---//
    // this method is help to fetch the data by using the get method "ID"
    getAllCustomerId(id: number): Customer{
        const customer = this.customers.find((c)=> c.id === id);
        if(!customer) throw new NotFoundException('Customer is not found');
        return customer;
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
        const index = this.customers.findIndex((c)=> c.id === id);
        if(index === -1) throw new NotFoundException('Customer is not Found');
        this.customers[index]= {id, ...createCustomerDTO};
        return this.customers[index];
    }

    // ---- PATCH Method ----//
    // this method is used to update the specific field of customer data
    patchCustomer(id: number, createCustomerDTO: Partial<(CreateCustomerDTO)>){
        const customer = this.getAllCustomerId(id);
        Object.assign(customer, createCustomerDTO);
        return customer;
    }

}
