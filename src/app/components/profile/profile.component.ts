import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  wallet:Wallet = new Wallet();

  constructor(private authService:AuthService){}

  ngOnInit(): void {
      this.authService.getUserInfo().subscribe({
        next:(data)=>{
          console.log(data);
          this.wallet = data;
        
        },
        error:(err)=>{
          console.log(err);
        }
      }

      );
  }
}
