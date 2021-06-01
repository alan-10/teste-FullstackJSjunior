import fs from 'fs';
import { resolve, join } from 'path';
import { writeFile, readFile } from './readFileAndWriteFile';

const filePath = resolve(__dirname, '..','database');
const file = 'databaseTest.json';

const newFile = join(filePath, file);
const dataInitialONE = 
  {
    id: "cb83cda3-3519-4f43-a6c5-4f8f3e05c6",
    email: "alan25251121@gmail.com",
    password: "$2a$08$CtNVNBB/5V1dbQNIqPu3l.4by"
  };
  const dataInitialTWO = 
  {
    id: "cb83cda3-3519-4f43-a6c5-4f8f3e05c6",
    email: "alan101010292019@gmail.com",
    password: "$2a$08$CtNVNBB/5V1dbQNIqPu3l.4by"
  };



export function createDataBaseTest(){
  fs.writeFile(newFile,`[]`, (err) => {
    if(err) throw err;
    console.log('arquivo criado com sucessso');
    const data = readFile();
    data.push(dataInitialONE);
    data.push(dataInitialTWO)
    writeFile(data);
  });
}

