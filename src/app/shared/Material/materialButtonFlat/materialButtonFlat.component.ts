import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'material-button-flat',
  imports: [MatButtonModule,CommonModule,MatIconModule],
  templateUrl: './materialButtonFlat.component.html',
  styleUrl: './materialButtonFlat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialButtonFlatComponent {

  isIcon = input<boolean>(false);
  nameButton = input<string|null>(null);
  nameIcon = input<string|null>(null);
  classButton = input<string|null>(null);
  disabled = input<boolean>(false);
  EmmitterisClick = output<boolean>();

  isClicked(){
    this.EmmitterisClick.emit(true);
  }

 }
