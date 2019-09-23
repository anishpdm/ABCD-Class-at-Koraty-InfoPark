import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) { }
  uname:string='';
  pass:string='';
   status=JSON.parse(localStorage.getItem('loggedIn'));

  onSubmit(data:NgForm){

    console.log(data.value);


this.uname=data.value.uname;
this.pass=data.value.pass;


if(this.uname=="admin"&&this.pass=="12345"){

  localStorage.setItem('loggedIn','true');

  console.log(this.status);

  this.router.navigateByUrl('welcome');

}else{

}

    } )





  ngOnInit() {
  }

}
