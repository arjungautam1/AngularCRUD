import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postStudent(data : any){
    return this.http.post<any>("http://localhost:8080/user/",data);
  }

  getStudent(){
    return this.http.get<any>("http://localhost:8080/users/");
  }
}

