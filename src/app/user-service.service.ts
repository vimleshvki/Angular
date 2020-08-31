import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import{Login}from './login/login';
import { from, Observable } from 'rxjs';
import{ Router }from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient, private router:Router) { }
  loginurl="http://localhost/MyRadar.Api/api/user/login";

  getdata(){
    let url="https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);
  }

    //our api calles.
  getdatawithoutparameter()
  {
    let url="http://localhost/myradar.api/api/user/getData";
    return this.http.get(url);
  }

  getdatawithparameter(id:number)
  {
    let url="http://localhost/myradar.api/api/user/getDatawithParam";
    return this.http.get(url + "?"+id);
  }

  getdatawithPostrequesModel(data:Login):Observable<any>
  {
    let url="http://localhost/myradar.api/api/user/getDatausingPostandModel";
    return this.http.post(url,data);
  }


  UserLogin(logindata: Login):Observable<any>{
    return this.http.post(this.loginurl,logindata);
  }

  //below method retruns boolean.
  isAuthenticated():boolean{
   let data=localStorage.getItem("user_interface_id");
   if(data!=null)
   {
     return true;
   }
   else
   {
     return false;
   }
  }

  logoutUser()
  {
    localStorage.removeItem('user_interface_id');
    localStorage.removeItem('userdata');
    this.router.navigate(['/login']);
  }
}
