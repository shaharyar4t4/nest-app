
// this file basically is create for validation process jab koi user data add karya wo valid ho

import { IsInt, IsString } from "class-validator";

export class CreateCustomerDTO{

    // isstring is a class transfermer they will make sure value always get on string
    @IsString()
    name: string;
    @IsInt()
    age: number;
}