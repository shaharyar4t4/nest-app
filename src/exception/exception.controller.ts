import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('exception')

// usefilters is help to implemention of exception handle
@UseFilters(HttpExceptionFilter)
// this controller get the value in the form of INT agr is koi string ki formate me data share karya tu exception ka method chala ga 
export class ExceptionController {
    @Get('hello/:id')
    getHello(@Param('id', ParseIntPipe) id: number){
        return {message: `Your ID is: ${id}`}

    }
}
