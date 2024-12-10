import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideNavComponent } from '../../shared/sideNav/sideNav.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [SideNavComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {



}
