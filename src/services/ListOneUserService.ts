import { User } from '../models/User';
import { readFile } from '../utils/readFileAndWriteFile';
import { UserRepository } from '../repositories/UserRepository';

export class ListOneUserService {
  execute(id: string){
    
    const users: User[] = readFile();
    const selectUserById = users.find(user => user.id == id);
    
    return selectUserById;
  }
}