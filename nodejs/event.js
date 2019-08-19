var EventEmitter = require('events');

var emitter=new EventEmitter();


emitter.on("doorOpen",(name)=>{
    console.log(name+" is waiting Outside...");
});


emitter.on("doorOpen",(name)=>{
    console.log("Dear "+name+",Please wait outside for a Moment")
})


emitter.emit("doorOpen","Anoop");
emitter.emit("doorOpen","Raju");

