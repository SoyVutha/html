const math=require("./Math");
const path=require("path");
const fs = require("fs");
const { error } = require("console");

try{ //synchronous = code waited to be done 
    const doc=fs.readFileSync("./doc.txt");
    console.log(doc.toString());
}catch(error){
    console.log("file not found");
}

fs.writeFile("./New.txt","This is the add up text",(error)=>{  //asychronous= code doesnt wait
    if(error) throw error;
    console.log("file written");
})

fs.readFile("./New.txt",(error,data)=>{
    if(error) throw error;
    fs.appendFile("./doc.txt",`\n${data}`,(error)=>{
        if(error) throw error;
        console.log("file appended");
    })
})


process.on("uncaughtException",error=>{
     console.log(error);
    process.exit(1);
})

console.log("Hello Duck");

console.log(__dirname);
console.log(__filename);
console.log(path.parse(__filename));
console.log(math.sub(5,4));