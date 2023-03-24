import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet } from '../model/Wallet';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  userLogin(wallet:Wallet):Observable<any>{
    return this.httpClient.post("http://localhost:8090/login", wallet, {responseType:'json'});
  }

  userLogout(){
    // return this.httpClient.post("http://localhost:8090/logout")
  }
  getUserInfo():Observable<any>{
    let jwt = sessionStorage.getItem("jwt");
    var reqHeader = new HttpHeaders({
      'Content-Type':'application.json',
      'Authorization': `Bearer ${jwt}`
    });
    return this.httpClient.get("http://localhost:8090/userinfo", { headers: reqHeader })
  }
}
