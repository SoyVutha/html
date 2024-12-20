import path from 'path';
const filepath='./filemodule/text1.txt';
console.log("Base name: "+path.basename(filepath));
console.log("Dirname"+path.dirname(filepath));
console.log("Extention name: "+path.extname(filepath));
console.log(path.parse(filepath));