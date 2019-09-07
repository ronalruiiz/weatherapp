import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';
import {NgModule} from '@angular/core';
import {ConfigComponent} from './config/config.component';
import {ListUsersComponent} from './list-users/list-users.component';
import {HomeComponent} from './home/home.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'list', component: ListUsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
