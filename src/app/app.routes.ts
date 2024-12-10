import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { DashboardBankComponent } from './components/dashboard-bank/dashboard-bank.component';
import { DashboardEcomerceComponent } from './components/dashboard-ecomerce/dashboard-ecomerce.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  {path:'',component:DashboardLayoutComponent,
    children:[
      {path:'',component:WelcomeComponent},
      {path:'bank',component:DashboardBankComponent},
      {path:'ecommerce',component:DashboardEcomerceComponent}]
  }

];
