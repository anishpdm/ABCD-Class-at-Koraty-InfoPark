import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../api.service'


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  getName='';
  getEmail='';
  getMsg='';

  onSubmit(data:NgForm){

    console.log(data.value);
   
    this.apiService.insertData(data.value).subscribe( (response)=>{
console.log(response);
alert('Succesfully Inserted');


    } )


  }


  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

}
