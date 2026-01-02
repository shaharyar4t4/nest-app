import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
        // this is private method
    private employee = [
        {id: 1, name: "Sameer", salary: 20000},
        {id: 2, name: "Muneeb", price: 30000},
        {id: 3, name: "Hassan", price: 40000}
    ];

    // Service --- > Employee (All)
    getAllService(){
        return this.employee;
    }

    // Service  --->  Employee (By using the ID)
    getServiceId(id: number){
        return this.employee.find((product) => product.id == id);
    }
}
