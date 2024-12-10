import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideNavComponent } from '../../shared/sideNav/sideNav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [SideNavComponent,RouterOutlet],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {



}
