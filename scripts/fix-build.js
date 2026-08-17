import fs from 'node:fs';
const path='src/App.tsx';
let source=fs.readFileSync(path,'utf8');
const old="file.name.replace(/[^a-zA-Z0-9.-]/g,'-')";
const safe="file.name.split(' ').join('-').split('/').join('-')";
if(source.includes(old)){source=source.replace(old,safe);fs.writeFileSync(path,source);console.log('PetMaster upload filename normalized.')}else{console.log('PetMaster build patch complete.');}
