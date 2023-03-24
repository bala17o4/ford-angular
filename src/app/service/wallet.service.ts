import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Wallet} from '../model/Wallet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private httpClient:HttpClient) { }

  addWallet(newWallet: Wallet):Observable<any>{
    return this.httpClient.post("http://localhost:8090/wallet",newWallet);
  }

  getWalletById(id:string|null):Observable<any>{
    return this.httpClient.get("http://localhost:8090/wallet/"+id);
  }
  getAllWallet():Observable<any>{
    return this.httpClient.get("http://localhost:8090/wallets");
  }

  updateWallet(wallet:Wallet):Observable<any>{
    return this.httpClient.put("http://localhost:8090/updatewallet",wallet);
  }

  deleteWallet(id?:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8090/deletewallet/"+id);
  }

  addFunds(id?:number,amount?:number):Observable<any>{
    let body = {'id':id,'amount':amount};
    return this.httpClient.put("http://localhost:8090/addfund/"+encodeURIComponent(String(id))+"/"+encodeURIComponent(String(amount)),body);
  }

  withdrawFunds(id?:number,amount?:number):Observable<any>{
    let body = {'id':id,'amount':amount};
    return this.httpClient.put("http://localhost:8090/withdraw/"+encodeURIComponent(String(id))+"/"+encodeURIComponent(String(amount)),body);
  }

  transferFunds(id?:number,toId?:number,amount?:number):Observable<any>{
    let body = {'id':id,'toId':toId,'amount':amount};
    return this.httpClient.patch("http://localhost:8090/transfer/"+encodeURIComponent(String(id))+"/"+
    encodeURIComponent(String(toId))+"/"+encodeURIComponent(String(amount)),body);
  }

}
