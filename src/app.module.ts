import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { CustomersModule } from './customers/customers.module';
import { MyNameController } from './my-name/my-name.controller';
import { AgeCheckerController } from './check/age-checker/age-checker.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';

@Module({
  imports: [EmployeeModule, StudentModule, CustomersModule], // make sure the new module is import on app
  controllers: [AppController, UserController, ProductController, MyNameController, AgeCheckerController, UserRolesController, ExceptionController, DatabaseController],
  providers: [AppService, ProductService, DatabaseService],
})
export class AppModule implements NestModule{
  // the middle ware consumer means which part need to implement the middle ware 
  // Inshort client side koi bhai end-point ko acecss karya tu phela middleware chala gya then controller or koi service chala gi 
  
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');

  }
}
