import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  constructor(private walletService:WalletService,private router:Router){}
  refer:Wallet = new Wallet();
  wallet :Wallet = new Wallet();

  amount?:number;
  id?:string;
  password?:string;

  ngOnInit():void{
    let json = sessionStorage.getItem("user")
    this.wallet = JSON.parse(json!);

  }
  onSubmit(id?:string,amount?:number,password?:string){
    this.walletService.getWalletById(id!).subscribe(
      {
        next: (data)=>{
          this.refer = data;
          if(this.refer.password == password){
            this.walletService.addFunds(Number(id),amount).subscribe(
              {
                next: (data)=>{
                  console.log(data)
                  this.router.navigateByUrl('/wallet');
                },
                error: (error)=>{
                  console.log(error)
                }
              }
            )
          }else{
            console.log("wrong Password");
            console.log(password);
          }
        }
      }
    )

  }
  back(){
    this.router.navigateByUrl('/wallet');
  }

}
