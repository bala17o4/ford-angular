import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegistrationComponent} from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { WallethomeComponent} from './components/wallethome/wallethome.component';
import { UpdateComponent } from './components/update/update.component';
import { FundsComponent} from './components/funds/funds.component';
import { WithdrawComponent} from './components/withdraw/withdraw.component';
import { TransferComponent} from './components/transfer/transfer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'login',component:LoginComponent},
  {path: 'wallet',component:WallethomeComponent},
  {path: 'update/:id', component:UpdateComponent},
  {path: 'funds',component:FundsComponent},
  {path: 'withdraw',component:WithdrawComponent},
  {path: 'transfer',component:TransferComponent},
  {path: 'profile', component:ProfileComponent,canActivate:[GuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
