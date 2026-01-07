import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class StudentService {
    private student = [
        { id: 1, name: "Shaharyar", age: 24 },
        { id: 2, name: "Hassan", age: 21 },
        { id: 3, name: "Fahad", age: 18 }
    ];

    //GET methods
    // this 2 method is used for fetching the data
    // fetch the all data of student 
    getAllStudents() {
        return this.student;
    }

    // GET Method by id
    //fetching the data by using the id
    getStudentbyId(id: number) {
        // find the id  S = 3 checking condition like s===id 3==3 
        const student = this.student.find((s) => s.id === id);
        if(!student) throw new NotFoundException('Student not found!');
        return student;
    }

    // POST Method
    // this method for POST
    createStudent(data: {name: string; age: number}){
       const newStudent = {
        id: Date.now(),
        ...data,
       };
       this.student.push(newStudent);
       return newStudent;
    }

    //PUT Method
    // PUT is help to update the data by using the unique id
    updateStudent(id: number, data: {name: string; age: number}){
        const index = this.student.findIndex((s)=> s.id === id);
        if(index === -1) throw new NotFoundException('Student not found!');
        this.student[index] = {id, ...data};
        return this.student[index];
    }

    // PATCH Method 
    // Patch is help to update the specific field
    patchStudent(id: number, data: Partial<{name: string, age: number}>){
        const student  = this.getStudentbyId(id);
        // this method is used to merge the data with existing data "Object"
        Object.assign(student, data);
        return student;
    }

    // DELETE Method 
    // Delete is help to remove the data by using the unique id
    deletestudent(id: number){
        const student = this.student.find((s) => s.id === id);
        if(!student) throw new NotFoundException('Student not found!');
        // const Delete
    }
}
