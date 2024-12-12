import http from 'http';
const PORT =process.env.PORT; // the port value doenst matter , it's only local host
const server =http.createServer((req,res)=>{
    res.write("Hello Duck");
    
    
    res.end();
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