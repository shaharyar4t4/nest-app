import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class StudentService {
    private student = [
        { id: 1, name: "Shaharyar", age: 24 },
        { id: 2, name: "Hassan", age: 21 },
        { id: 3, name: "Fahad", age: 18 }
    ];
    // this 2 method is used for fetching the data
    // fetch the all data of student 
    getAllStudents() {
        return this.student;
    }
    //fetching the data by using the id
    getStudentbyId(id: number) {
        // find the id  S = 3 checking condition like s===id 3==3 
        const student = this.student.find((s) => s.id === id);
        if(!student) throw new NotFoundException('Student not found!');
        return student;
    }

    // this method for POST
    createStudent(data: {name: string; age: number}){
       const newStudent = {
        id: Date.now(),
        ...data,
       };
       this.student.push(newStudent);
       return newStudent;
    }

    // PUT
    updateStudent(id: number, data: {name: String; age: number}){
        const index = this.student.findIndex((s)=> s.id === id);
        if(index === -1) throw new NotFoundException('Student not found!');
    }
}
