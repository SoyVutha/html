import http, { get } from 'http';
const PORT =process.env.PORT; // the port value doenst matter , it's only local host
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
console.log(__filename,__dirname);

const server =http.createServer(async(req,res)=>{
    try{

        if(req.method==='GET'){
            let filepath;
            if(req.url==='/'){
                filepath=path.join(__dirname,'Resource','Index.html');
                res.end("This is the Index");

                
            }
            else if(req.url==="/about"){
                filepath=path.join(__dirname,'Resource',"About.html");
                
            }
            else {
                res.writeHead(404,{'Content-Type':'text/plain'});

                res.end('404 Not Found\n');
            }

            const data=await fs.readFile(filepath);
            res.setHeader('Content-Type','text/html');
            res.write(data);
            res.end();
        }
        else{
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end('404 Method Not Allowed\n');
        }
    }
    catch(error){
        res.writeHead(500,{'Content-Type':'text/plain'});
        res.end('500 Not Found\n');
    }

})


server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})







// http – For creating HTTP servers and making requests.
// fs – For working with the file system (reading/writing files).
// path – For working with and manipulating file and directory paths.
// express – A popular framework for building web applications.
// dotenv – For managing environment variables.
// mongoose – For interacting with MongoDB databases.
// body-parser – For parsing incoming request bodies in web apps.