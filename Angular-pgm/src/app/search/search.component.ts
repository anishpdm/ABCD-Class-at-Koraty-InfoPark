import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  status=true;
   mydata:  Array<object> = [];

  constructor(private apiService:ApiService) { }

  editbutton(){
    this.apiService.updateData(this.mydata).subscribe( (response)=>{
      console.log(response);

     
        //console.log('No name found')
        alert('Updated Succesfully')


      } )


  }

  delbutton(){

    this.apiService.deleteData(this.mydata).subscribe( (response)=>{
      console.log(response);

     
        //console.log('No name found')
        alert('DELETED Succesfully')


      } )
}

  onSubmit(data){

    this.apiService.searchData(data.value).subscribe( (response:Array<object>)=>{
      console.log(response);

     
      this.mydata=response;
      console.log(this.mydata.length);

      if(this.mydata.length > 0 ){
        this.status=false;

      }
      else{
        console.log('No name found')
        alert('No name Found')

      }

      
      
          } )


    // if(data.value.name=="admin"){
    //   this.status=true;
    // }
  }

  ngOnInit() {
  }

}
