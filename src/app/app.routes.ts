import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { DashboardBankComponent } from './components/dashboard-bank/dashboard-bank.component';
import { DashboardEcomerceComponent } from './components/dashboard-ecomerce/dashboard-ecomerce.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { TaskListComponent } from './components/TaskList/TaskList.component';
import { ChatComponent } from './components/chat/chat.component';

export const routes: Routes = [
  {path:'',component:DashboardLayoutComponent,
    children:[
      {path:'',component:WelcomeComponent},
      {path:'dashboard/bank',component:DashboardBankComponent},
      {path:'app/chat',component:ChatComponent},
      {path:'dashboard/ecommerce',component:DashboardEcomerceComponent},
      {path:'app/kanban',component:KanbanComponent},
      {path:'app/task-list',component:TaskListComponent},
    ]
  }

];
