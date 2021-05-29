import { UserRepository } from '../repositories/UserRepository';
import { readFile } from '../utils/readFileAndWriteFile';
import { User } from '../models/User';
import { AppError } from '../errors/AppError';

interface Request {
  email: string;
  password: string;
}
export class CreateUserService {
  execute( { password, email }: Request): User{

    const users: User[] = readFile();

    const userExists = users.find(user => user.email === email);

    if(userExists){
      throw new AppError('users alread exists', 409);
    }

    const newUser = new User({email, password})
    const user = new UserRepository()
    user.create(newUser);
    return newUser;
  }
}