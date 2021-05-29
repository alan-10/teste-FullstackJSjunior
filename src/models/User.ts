import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs'; 
export class User {
  readonly id: string;
  email: string;
  password: string;
  
  constructor({password, email}:Omit<User, 'id'>) {
    this.id = uuid();
    this.email = email;
    this.password = bcrypt.hashSync(password,8);
  }
} 