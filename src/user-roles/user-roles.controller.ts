import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorater';
import { Role } from 'src/guards/roles/roles.enums';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
   @Get('admin-data')
   @UseGuards(RolesGuard)
   // this is custom decorator 
   @Roles(Role.Admin)
   getAdnin(){
     return{message: "Only access by admin"}
   }
   @Get('user-data')
   @UseGuards(RolesGuard)
   // there is no mention the decorator becuser this function is access the all user
   getUserData(){
     return{message: "Any one can access the data"}
   }

}
