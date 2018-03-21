import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { AccountComponent } from './component/account/account.component';
import { RegisterComponent } from './component/register/register.component';
import { MapComponent } from './component/map/map.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DataentryComponent } from './component/dataentry/dataentry.component';
import { AuthGuard } from './guards/auth.guards';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
  {
    path: 'dashboard', 
    component: DashboardComponent 
  },
  { 
    path: 'products',
    component: ProductsComponent
  },
  { 
    path: 'account',
    component: AccountComponent
  },
  { 
    path: 'register',
    component: RegisterComponent
  },
  { 
    path: 'map',
    component: MapComponent
  },
  { 
    path: 'dataentry',
    component: DataentryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
