import { User } from '../models/User';
import { readFile, writeFile } from '../utils/readFileAndWriteFile';
import fs from 'fs';

interface UserRepositoryDTO {
  email: string;
  password: string;
}

export class UserRepository {
  create(newUser: UserRepositoryDTO) {
    const currentContent = readFile();
    currentContent.push(newUser);
    writeFile(currentContent);
  }

  listAll() {
    const content = readFile();
    return content;
  }

  delliteAll() {
    writeFile([]);
  }
}
