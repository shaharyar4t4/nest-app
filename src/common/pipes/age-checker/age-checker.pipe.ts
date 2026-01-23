import {BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class Agechecker implements PipeTransform {
  transform(age: number) {
    if( age < 18){
        throw new BadRequestException("you are not access this games!!!!!")
    } 
    return age;
  }
}
