import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'material-icon-button',
  imports: [MatButtonModule,MatIconModule,CommonModule],
  templateUrl: './materialIconButton.component.html',
  styleUrl: './materialIconButton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialIconButtonComponent {
  classColorIcon = input<string|null>(null);
  classButton = input<string|null>(null);
  nameIcon = input<string|null>(null);
  emitterIsClicked = output<boolean>();


  isClicked(){
    this.emitterIsClicked.emit(true);
  }

}
