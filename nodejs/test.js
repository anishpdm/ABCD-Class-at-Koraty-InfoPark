var EventEmitter = require('events');
var emitter = new EventEmitter();


emitter.on('doorOpen', (msg)=>{
    console.log("Ring Ring"+msg.msgContent)
});


// Multiple Listners
emitter.on('doorOpen', (msg)=>{
    console.log("Ding Dong..."+msg.msgContent)
});

// emitter.emit('doorOpen');
// emitter.emit('doorOpen','Hello');


emitter.emit('doorOpen',{msgContent:'New Message Arrived'});