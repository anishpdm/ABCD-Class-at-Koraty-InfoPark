const Express=require('express');
var bodyParser = require('body-parser');
const Mongoose = require("mongoose");
var request = require('request');


const PersonModel = Mongoose.model("person", {
    firstname: String,
    lastname: String
});

var app=new Express();

app.set('view engine','ejs');


app.use(Express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(Express.urlencoded())
//mongodb+srv://anishsnair:<password>@cluster0-rqfpy.mongodb.net/test?retryWrites=true&w=majority
// Mongoose.connect("mongodb://localhost/thepolyglotdeveloper");
Mongoose.connect("mongodb+srv://anishsnair:hello12345@cluster0-rqfpy.mongodb.net/test?retryWrites=true&w=majority");






students=["Anjali","Rahul","Bijitha","Arun","Manu"];

const url = 'http://localhost:3003/people';

app.get('/fetch', function(req, res) {
  request(url, function(error, response, body) {
    const info = JSON.parse(body);
    console.log(info);
    res.render('fetch', { info });
  });
});



app.post("/person", async (request, response) => {
    try {
        var person = new PersonModel(request.body);
        var result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/people", async (request, response) => {
    try {
        var result = await PersonModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});



app.get("/person/:id", async (request, response) => {
    try {
        var person = await PersonModel.find( {firstname:request.params.id}).exec();
        response.send(person);
    } catch (error) {
        response.status(500).send(error);
    }
});




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


app.listen(process.env.PORT || 3003,()=>{
    console.log("Server Running on http://localhost:3000")
});