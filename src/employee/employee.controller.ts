import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeservice: EmployeeService){}

    @Get()
     getEmployees(){
        return this.employeeservice.getAllService();
        
     }

     @Get(':id')
      getEmployee(@Param('id') id: string){
        return this.employeeservice.getServiceId(Number(id));
      }
}
