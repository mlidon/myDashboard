import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardActions, MatCardAppearance, MatCardModule} from '@angular/material/card';

@Component({
  selector: 'material-card',
  imports: [MatCardModule,FormsModule,CommonModule],
  templateUrl: './materialCard.component.html',
  styleUrl: './materialCard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialCardComponent {
  classGeneral = input<string|null>(null)
  classHeader = input<string|null>(null);
  classBody = input<string|null>(null);
  classAction = input<string|null>(null);
  isNeedActions = input<boolean>(false);
  apparence = input<MatCardAppearance>("outlined");
  title = input<string|null>(null);
  subtitle = input<string|null>(null);
}
