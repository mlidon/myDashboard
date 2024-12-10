import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'picture-user',
  imports: [],
  templateUrl: './pictureUser.component.html',
  styleUrl: './pictureUser.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureUserComponent {
  urlUserPicture:string = "../../../../public/img/yo.jpg"

}
