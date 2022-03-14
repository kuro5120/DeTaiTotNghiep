import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { HomeComponent } from './module/home/home.component';
import { LoginComponent } from './module/login/login.component';
import { ProductComponent } from './module/product/product.component';

const routes:  Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,

    children: [
      {
        path: 'home/dashboard',
        component: DashboardComponent
      },
      {
        path: 'home/product',
        component: ProductComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
