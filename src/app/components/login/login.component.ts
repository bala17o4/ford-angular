import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletService } from 'src/app/service/wallet.service';
import {Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  wallet:Wallet = { name: "",password:""};

  constructor(private router:Router,private activatedRoute: ActivatedRoute, private walletService: WalletService, private authService: AuthService) { }
  // name?:string;
  // password?:string;
  // id?:string;
  // refer:Wallet = new Wallet();
  // errmsg?:string|null = "";

  submitForm(){
    console.log("Form submit");
    this.authService.userLogin(this.wallet).subscribe(
      {
        next:(data)=>{
          console.log(data)
          sessionStorage.setItem("user",JSON.stringify(data));
          console.log(data.jwt);
          sessionStorage.setItem("jwt",data.jwt);
          sessionStorage.setItem("role",data.role);
          this.router.navigateByUrl("profile");
        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

  back(){
    this.router.navigateByUrl('/home');
  }

}
