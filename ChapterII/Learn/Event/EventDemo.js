import EventEmitter from 'events';
const myEmitter=new EventEmitter();
const hello=()=>{
    console.log("Hello");
}
const goodbye=()=>{
    console.log("Goodbye");
}
myEmitter.on('hello',hello);
myEmitter.on('goodbye',goodbye);
myEmitter.emit('hello');
myEmitter.emit('goodbye');
