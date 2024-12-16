import { ChangeDetectionStrategy, Component, input, OnInit, output, signal } from '@angular/core';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'material-timer-piker',
  imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule,FormsModule],
  templateUrl: './materialTimerPiker.component.html',
  styleUrl: './materialTimerPiker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTimerPikerComponent implements OnInit {

  titleLabel = input<string>('Piker');
  data = input< Date>(new Date());
  emmiterTimePikerSelected = output<Date|null>();
  timeSelected = signal<Date>(new Date());

  ngOnInit(): void {
    if (this.data()) {
      this.timeSelected.set(this.data()!);
    }

  }


  getSelectedTime(value:Date |string){
      let dateValue:Date;
      typeof value === 'string'? dateValue = new Date(value):dateValue = value;

      this.timeSelected.set(dateValue);
      this.emmiterTimePikerSelected.emit(dateValue)
  }

 }
