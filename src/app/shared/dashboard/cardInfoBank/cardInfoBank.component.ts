import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { InfoBank } from '../../../_models/shared';
@Component({
  selector: 'card-info-bank',
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './cardInfoBank.component.html',
  styleUrl: './cardInfoBank.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardInfoBankComponent {
  infoCards = input<InfoBank>();

  
}
