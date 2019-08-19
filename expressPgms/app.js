const Express=require('express');
var bodyParser = require('body-parser');


var app=new Express();

app.set('view engine','ejs');


app.use(Express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(Express.urlencoded())







students=["Anjali","Rahul","Bijitha","Arun","Manu"];



app.get('/',(req,res)=>{

    res.render('index',{title:"ICTA","names":students});

});

app.get('/home',(req,res)=>{

    res.send("Welcome to my Home Page");

});

app.get('/read',(req,res)=>{

    var name=req.body.name;

  res.send(name);

});
app.get('/add/:num1/:num2',(req,res)=>{
    console.log(req.params);

var x=parseInt(req.params.num1);
var y=parseInt(req.params.num2);
console.log(x);
console.log(y);
var z=x+y;
res.send( " {'result' :" + String(z) + "}");
//console.log(z);
});


app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Running on http://localhost:3000")
});