import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-wallethome',
  templateUrl: './wallethome.component.html',
  styleUrls: ['./wallethome.component.css']
})
export class WallethomeComponent implements OnInit {
  wallet: Wallet[] = [];
  msg:string|null="";
  errmsg:string|null="";
  field:string='id';
  query:string="";


  constructor(private router: Router, private walletService: WalletService) { } 

  ngOnInit(): void{
    this.walletService.getAllWallet().subscribe(
      {
        next: (data)=>{
          // console.log(data);
          this.wallet = data;
        },
        error: (err) =>{
          console.log(err)
        },
        complete: ()=>{ }

      }
    )
  }
  updateWallet(wal:Wallet){
    this.router.navigate(['update',wal.id])
  }

  deleteWallet(id?:number): void{
    if (window.confirm("Do you want to delete Wallet " +id +" ?"))
      this.walletService.deleteWallet(id).subscribe(
        {
          next: (data)=>{
            this.msg = "Wallet delete Successfull";
            this.errmsg = ""

            
              this.wallet = this.wallet.filter((wal) => {
                console.log("wal.id:" + wal.id);
                console.log("id:" + id);

                if (wal.id != id) {
                  console.log("true :" + wal.id);
                  return true;
                }

                else {
                  console.log("false :" + wal.id);
                  return false;

                }

              }
              );
              console.log(this.wallet);
          },
          error: (err)=>{
            this.errmsg = "Wallet not deleted";
          }
        }
      )
  }
  changeSortByFiled(field:string){

    this.field = field;
  }

}
