import { UserRole } from "./userRole";

export interface User{
  id:string,
  username:string,
  password:string,
  firstname?:string,
  lastname?:string,
  userRole?:UserRole
  token?:string
}
