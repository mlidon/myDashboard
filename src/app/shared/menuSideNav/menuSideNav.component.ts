import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenuSideNav} from '../../_models/shared';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule} from '@angular/cdk/accordion';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';


const TREE_DATA: MenuSideNav[]=[
  {
    name:'Dashboard',icon:'grid_view',
    children:[{name:'Ecommerce',icon:'shopping_cart',url:'ecommerce'},
              {name:'Bank',icon:'account_balance',url:'bank'}]
  },
  {
    name:'App',icon:'devices',
    children:[
      {name:'Blog',icon:'comment',url:''},
      {name:'Knaban',icon:'view_kanban',url:''},
      {name:'Task List',icon:'checklist',url:''}]
  },
  {
    name:'Ui kit',icon:'architecture',
    children:[{name:'List'},{name:'Tree'},{name:'Panel'}]
  }
];



@Component({
  selector: 'menu-side-nav',
  imports: [MatButtonModule, MatIconModule, CdkAccordionModule, MatMenuModule, MatExpansionModule, RouterLink],
  templateUrl: './menuSideNav.component.html',
  styleUrl: './menuSideNav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MenuSideNavComponent {
  items = TREE_DATA;



 }
