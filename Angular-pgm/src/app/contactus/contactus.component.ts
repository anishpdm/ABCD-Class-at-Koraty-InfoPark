import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {ApiService} from '../api.service';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    
  }

  getName='';
  getEmail='';
  getMsg='';

  onSubmit(data:NgForm){

    console.log(data.value);
    this.getName=data.value.name;
    this.getEmail=data.value.email;
    this.getMsg=data.value.msg;

    this.apiService.sendToServerData(data.value).subscribe((response) => {
      console.log(response);
      alert('Succesfully Inserted')
     
  });


  }


  
  


}
