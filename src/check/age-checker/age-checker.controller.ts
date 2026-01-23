import { Body, Controller, Post } from '@nestjs/common';
import { Agechecker } from 'src/common/pipes/age-checker/age-checker.pipe';

@Controller('age-checker')
export class AgeCheckerController {
    @Post()
    agecheck(@Body('age', new Agechecker()) age: number) {
        
        return {message: 'you access the data', age}
    }
}
