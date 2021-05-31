import { User } from '../models/User';
import { readFile } from '../utils/readFileAndWriteFile';
import { UserRepository } from '../repositories/UserRepository';
import { AppError } from '../errors/AppError';

export class ListOneUserService {
  execute(id: string) {
    const users: User[] = readFile();
    const selectUserById = users.find(user => user.id == id);

    if(!selectUserById){
      throw new AppError('User not exists', 400)
    }

    return selectUserById;
  }
}
