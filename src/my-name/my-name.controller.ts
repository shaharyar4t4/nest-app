import { Body, Controller, Post } from '@nestjs/common';
import { UpperCasePipe } from 'src/common/pipes/upper-case/upper-case.pipe';

@Controller('my-name')
export class MyNameController {
    @Post('custom')
    myNameTransform(@Body('name', new UpperCasePipe()) name: string){
        return {message: `Received name: ${name}`}
    }
}
