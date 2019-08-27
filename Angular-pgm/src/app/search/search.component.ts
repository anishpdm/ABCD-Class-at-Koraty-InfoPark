import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  status=false;

  constructor() { }

  onSubmit(data){
    if(data.value.name=="admin"){
      this.status=true;
    }
  }

  ngOnInit() {
  }

}
