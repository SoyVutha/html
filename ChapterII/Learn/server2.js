//1.server
//2.create server
//3.listen
//4.handle request
//5.send response
//6.post request

import http from 'http';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname=dirname(fileURLToPath(impor t.meta.url));
const PORT = process.env.PORT||8000;

const users=[{
    id:1,Name:"John",},{
    id:2,Name:"Jane",},{
    id:3,Name:"Bob",}];

//middleware
const middleware=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}

//POST Request 
const getUser=(req,res)=>{
    let body='';
    req.on('data',(chunk)=>{
        body+=chunk.toString();
    })
    req.on('end',()=>{
       try{
         const newUSer=JSON.parse(body);//it should be input in json format
        users.push(newUSer);
        res.statusCode=201;
        res.write(JSON.stringify(newUSer));
        res.end();
       }catch(error){
        res.statusCode=400;
         res.write(JSON.stringify({ error: 'Invalid JSON format' }));
         res.end();
       }
    })
}

const server=http.createServer((req,res)=>{
    middleware(req,res,()=>{        
            if(req.method==='GET' && req.url==='/API/users')
            {
                res.writeHead(200,{'Content-Type':'application/json'});
                res.write(JSON.stringify(users));
                res.end();
            }
            else if(req.url==='/'){
                res.writeHead(200,{'Content-Type':'application/json'});
                res.write("Hello duck");
                res.end();
            }
             else if (req.url.match(/\/API\/users\/([0-9]+)/) && req.method === 'GET')
            {
                 const id = req.url.split('/')[3];
                const user=users.find((user)=>user.id===parseInt(id));
                res.writeHead(200,{'Content-Type':'application/json'});
                if(user){
                    res.write(JSON.stringify(user));
                }
                else{
                    res.write(JSON.stringify({"error":"User not found"}));
                }
                res.end();
            }
            else if(req.method==='POST' && req.url==='/API/users'){
                getUser(req,res);
            }
            else{
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.write('404');
                res.end();
            }

    });
})
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})