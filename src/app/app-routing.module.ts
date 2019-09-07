import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {WeatherComponent} from './pages/weather/weather.component';
import {AdminComponent} from './pages/admin/admin.component';
import {AdminGuard} from './admin.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'admin', canActivate: [AdminGuard],
    component: AdminComponent, loadChildren: () => import('./admin/admin.module').then(e => e.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
