
import { IsInt, IsString } from "class-validator";


// this dto is help to check the validation of user name and age
export class UserDTO{

    @IsString()
    name: string;
    @IsInt()
    age: number;
}