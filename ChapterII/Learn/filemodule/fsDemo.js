import fs from 'fs';
import { promises as fspromises } from 'fs';

//how to read file------------------------------------------------
//read file () callback
fs.readFile('./text1.txt','utf-8',(data,error)=>{   //asyn version, used more often
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})

try{    //syn version
    const data=fs.readFileSync('./text1.txt','utf-8');
    console.log(data);
}
catch(error){
    throw(error);
}

fspromises.readFile('./text1.txt','utf-8')  //promiss.then()
.then((data)=>{console.log(data)})
.catch((data)=>{console.log(data)});

const readFile=async()=>{
    try{
        const data=await fspromises.readFile('./text1.txt','utf-8');
    }catch(error){
        console.log(error);
    }
}


//---how to write file-------------------------------------------------------------------
const writefile=async()=>{  //this will override
    try{
        await fspromises.writeFile('./text1.txt','This is the new text to the Duck file');
        console.log('file written');
    }
    catch(error){
        console.log(error);
    }
}

const append=async()=>{
    try{
        await fspromises.appendFile('./text1.txt',"\nThis is the append text");
        console.log('file appended');
    }
    catch(error){
        console.log(error);
    }
}


writefile();
append();

