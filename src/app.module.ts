import { Module } from '@nestjs/common';
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

@Module({
  imports: [EmployeeModule, StudentModule, CustomersModule], // make sure the new module is import on app
  controllers: [AppController, UserController, ProductController, MyNameController, AgeCheckerController],
  providers: [AppService, ProductService],
})
export class AppModule {}
