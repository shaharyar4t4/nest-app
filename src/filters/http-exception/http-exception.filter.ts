import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {

    // line is show the we are working on http protocols not in a web socoket 
    const ctx = host.switchToHttp();
    // get the respone from fontend
    const respone = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    // get the status 
    const status = exception.getStatus();

    // show the status 
    response.status(status).json({
      statusCode: status,
      // show the date like ---> 2/1/2026
      timestamp: new Date().toDateString(),
      path: request.url,
      message: exception.message
    })
  }
}
