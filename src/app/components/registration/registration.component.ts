import { Component } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { Observable } from 'rxjs';
import { WalletService } from 'src/app/service/wallet.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    wallet:Wallet = new Wallet();
    constructor(private walletService:WalletService,private router:Router){}

    onSubmit(){
      console.log(this.wallet);
      let walletPost: Observable<any> = this.walletService.addWallet(this.wallet);
      walletPost.subscribe(
        {
          next:(data)=>{
            console.log(data)
            this.router.navigateByUrl('/login');
          },
          error:(error)=>{
            console.log(error);
            
          },
          complete:()=>{
            console.log("success")
          }
        }
      )
    }
    back(){
      this.router.navigateByUrl('/home')
    }
}
