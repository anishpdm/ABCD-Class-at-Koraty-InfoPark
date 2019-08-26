import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return  this.httpClient.get('http://localhost:3000/getcontact');
}


  sendToServerData(xx){
    return  this.httpClient.post('http://localhost:3000/addcontact',xx);

  }


}
