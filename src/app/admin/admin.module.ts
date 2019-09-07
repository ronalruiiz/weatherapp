import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfigComponent} from './config/config.component';
import {AdminRoutingModule} from './admin-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ConfigComponent,
    ListUsersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
