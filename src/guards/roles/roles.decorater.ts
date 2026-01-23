import { SetMetadata } from "@nestjs/common";


// mention the Role keys
export const ROLES_KEY = 'roles';

// this is a custom decorator ---> in short we use like @post @get @Put @update @delete
// roles in the form of string 
// roles is submit in the form of keys now keys is convert into string
export const Roles =(...roles: string[]) => SetMetadata(ROLES_KEY, roles)