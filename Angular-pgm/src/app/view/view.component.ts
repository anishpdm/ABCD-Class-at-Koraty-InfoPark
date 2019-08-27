import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

 mydata:  Array<object> = [];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.fetchData();
  }


  public fetchData(){

    this.apiService.getData().subscribe( (response:Array<Object>)=>{

      this.mydata=response;

    } )

  }


}
