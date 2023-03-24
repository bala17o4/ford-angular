import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  wallet:Wallet = new Wallet();
  
  msg:string | null="";
  id:string|null="";
  errmsg:string|null="";


  constructor(private router:Router,private activatedRoute: ActivatedRoute, private walletService: WalletService) { }

  ngOnInit():void{
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.walletService.getWalletById(this.id).subscribe(
      {
        next: (data)=>{
          this.wallet = data;
          console.log(data)
        },
        error: (error)=>{
          console.log(error);
        }

      }
    )
  }

  update(){
    this.walletService.updateWallet(this.wallet).subscribe(
      {
        next: (data)=>{
          this.msg="Update Successful";
          this.router.navigateByUrl("wallet");
          this.errmsg="";
        },
        error: (error)=>{
          console.log(error.error);
          this.errmsg = JSON.stringify(error.error);
        }
      }
    )
  }
}
