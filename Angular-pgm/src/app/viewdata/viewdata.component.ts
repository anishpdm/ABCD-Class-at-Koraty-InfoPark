import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  private  contacts:  Array<object> = [];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getContacts();

  }
  public  getContacts(){
    this.apiService.getData().subscribe((data:  Array<object>) => {
        this.contacts  =  data;
        console.log(data);
    });
}

}
