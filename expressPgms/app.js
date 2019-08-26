const Express=require('express');
var bodyParser = require('body-parser');
const Mongoose= require('mongoose');
var request=require('request');

var app=new Express();

app.set('view engine','ejs');


app.use(Express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 

const StudentModel=Mongoose.model("studentdetails",
{
name:String,
rollno:String,
admno:String,
college:String
}
);


//Mongoose.connect("mongodb://localhost:27017/collegedb");
Mongoose.connect("mongodb+srv://anishsnair:hello12345@cluster0-rqfpy.mongodb.net/test?retryWrites=true&w=majority");






students=["Anjali","Rahul","Bijitha","Arun","Manu"];



app.get('/',(req,res)=>{

    res.render('index',{title:"ICTA","names":students});

});

const getdataApi="http://localhost:3003/getdatas";

app.get('/view',(req,res)=>{

request(getdataApi,(error,response,body)=>{
var data=JSON.parse(body);

console.log(data);
res.render('view',{'data':data});

});


});



app.get('/getAstudentApi',(req,res)=>{

// var Admno=req.body.admno;
StudentModel.find(req.body,(error,data)=>{
    if(error){
        throw error;
    }
    else{
        res.send(data)
    }
});



});


app.get('/getdatas', (req,res)=>{

     result= StudentModel.find( (error,data)=>{
       if(error){
           throw error;
       }
       else{
        res.send(data);

       }

     } );

});




app.post('/read', (req,res)=>{

    console.log(req.body);

    var student=new StudentModel(req.body);
    var result=  student.save( (error,data)=>{
if(error){
throw error;
res.send(error);
}
else{
    res.send('User Created'+data);

}
    });
   

 

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