import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, ViewChild} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MenuSideNavComponent } from "../menuSideNav/menuSideNav.component";
import { PictureUserComponent } from '../pictureUser/pictureUser.component';


@Component({
  selector: 'side-nav',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MenuSideNavComponent,
    PictureUserComponent,
  ],
  templateUrl: './sideNav.component.html',
  styleUrl: './sideNav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {

  mobileQuery!: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();

  }

}
