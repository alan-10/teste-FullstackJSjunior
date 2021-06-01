import fs from 'fs';

interface CurretContentDTO {
  id: string;
  email: string;
  password: string;
}

const fileDatabase = './src/database/database.json';
const fileDatabaseTest = './src/database/databaseTest.json';

export function writeFile(currentContent: CurretContentDTO[]) {
  fs.writeFileSync(
    process.env.NODE_ENV === 'test' ? fileDatabaseTest : fileDatabase,
    JSON.stringify(currentContent),
    'utf-8'
  );
}

export function readFile() {
  const content = fs.readFileSync(
    process.env.NODE_ENV === 'test' ? fileDatabaseTest : fileDatabase,
    'utf-8'
  );
  return JSON.parse(content);
}
