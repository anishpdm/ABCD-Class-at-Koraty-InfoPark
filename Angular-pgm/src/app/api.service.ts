import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
	

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
 x=12;
insertData(data){
  return this.http.post("http://localhost:3003/addcontact",data);

}

updateData(data){

  return this.http.post("http://localhost:3003/update",data);
}

deleteData(data){

  return this.http.post("http://localhost:3003/delete",data);
}

getData(){

  return this.http.get("http://localhost:3003/getcontact");
}

searchData(data){
  return this.http.post("http://localhost:3003/search",data);

}



}
