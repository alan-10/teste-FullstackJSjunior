import { AppError } from '../errors/AppError';
import { User } from '../models/User';
import { readFile, writeFile } from '../utils/readFileAndWriteFile';

export class DeleteOneUserService {
  execute(id: string) {
    const users: User[] = readFile();
    const selectItemByIndex = users.findIndex(user => user.id === id);

    if (selectItemByIndex === -1) {
      throw new AppError('User in not Exists');
    }
    users.splice(selectItemByIndex, 1);
    writeFile(users);
  }
}
