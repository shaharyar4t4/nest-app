import { Injectable, NestMiddleware } from '@nestjs/common';
// this package is import from express js
import { Request, Response, NextFunction } from 'express';

// Request is use form client data manage
// respone mean backend se kiya response datya 
// nextfunction is help to tranfer the data from any controller in short response ka process hona kiya bt respone kaha jaya ye bt next function bata ha....

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // the below line is a middleware
  use(req: Request, res: Response, next: NextFunction) {
    // method means like GET, Patch, Put, POST
    //url means the path of the request 
    console.log(`[${req.method}] - [${req.originalUrl}]`)
    // this line is show that requset method
    // this line is show that the url like (end-point)
    // original url is show the actual url in console
    next();
  }
}
