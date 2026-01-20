import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {

    constructor(private readonly customerService: CustomersService) { }

    @Get()
    getCustomers() {
        return this.customerService.getAllCustomers();
    }

    @Get(':id')
    getCustomerbyId(@Param('id') id: string){
        return this.customerService.getAllCustomerId(Number(id));
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

    @Patch(':id')
    patchCustomer(@Param('id') id: string, @Body() createCustomerDTO: CreateCustomerDTO){
        return this.customerService.patchCustomer(Number(id), createCustomerDTO);
    }
}
