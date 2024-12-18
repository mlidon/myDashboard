import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { MenuSideNav} from '../../_models/shared';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule} from '@angular/cdk/accordion';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

// --- Date of nav menu --- //
const TREE_DATA: MenuSideNav[]=[
  {
    name:'Dashboard',icon:'grid_view',
    children:[{name:'Ecommerce',icon:'shopping_cart',url:'/ecommerce'},
              {name:'Bank',icon:'account_balance',url:'/bank'}]
  },
  {
    name:'App',icon:'devices',
    children:[
      {name:'Blog',icon:'comment',url:''},
      {name:'Kanban',icon:'view_kanban',url:'/kanban'},
      {name:'Task List',icon:'checklist',url:'/task-list'}]
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
  currentPath = signal('');
  // isActive = signal(false);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateCurrentPath()
    });
  }

  private updateCurrentPath(){
    let route = this.activatedRoute;
    while (route.firstChild){
      route = route.firstChild;
    }
    this.currentPath.set('/'+route.snapshot.url.join('/'));
  }

 }
