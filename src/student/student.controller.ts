import { Controller, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { get } from 'http';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){};
    
    @Get()
    getStudents(){
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    getStudentbyId(@Param('id') id: string){
        return this.studentService.getStudentbyId(Number(id));
    }
}
