import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {

    constructor(private readonly customerService: CustomersService) { }

    @Get()
    getCustomers() {
        return this.customerService.getAllCustomers();
    }


    // Now We used the DTO (CreateCustomerDTO) for validation 
    @Post()
    addCustomer(@Body() createCustomerDTO: CreateCustomerDTO) {
        return this.customerService.addCustomer(createCustomerDTO);
    }

    @Put(':id')
    updateCustomer(@Param('id') id: string, @Body() createCustomerDTO: CreateCustomerDTO){
        return this.customerService.updateCustomer(Number(id),createCustomerDTO);
    }
}
