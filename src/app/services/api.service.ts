import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postStudent(data : any){
    return this.http.post<any>("http://localhost:8080/user/",data);
  }

  getStudents(){
    return this.http.get<any>("http://localhost:8080/users/");
  }

  putStudent(data:any,id : number){
    return this.http.put<any>("http://localhost:8080/user/"+id,data)
  }

  deleteStudent(id:number){
    return this.http.delete<any>('http://localhost:8080/user/'+id)
  }
}

