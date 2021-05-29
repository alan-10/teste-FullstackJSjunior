import fs from 'fs';

interface CurretContentDTO {
  id: string;
  email: string;
  password: string;
}

export function writeFile(currentContent: CurretContentDTO[] ){
  fs.writeFileSync('./backend.json',JSON.stringify(currentContent), 'utf-8');
}

export function readFile(){
  const content = fs.readFileSync('./backend.json', 'utf-8');
  return JSON.parse(content);
}