import { ChangeDetectionStrategy, Component, input, OnInit, output, signal } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'material-date-piker',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule],
  templateUrl: './materialDatePiker.component.html',
  styleUrl: './materialDatePiker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialDatePikerComponent implements OnInit{

  titleLabel = input<string>('Piker');
  data = input< Date>(new Date());
  emmiterDatePikerSelected = output<Date|null>();
  dateSelected = signal<Date>(new Date());


  ngOnInit(): void {
    if (this.data()) {
      this.dateSelected.set(this.data()!);
    }
  }


  getSelectedDate(value:Date |string){
    let dateValue:Date;
    typeof value === 'string'? dateValue = new Date(value):dateValue = value;

    this.dateSelected.set(dateValue);
    this.emmiterDatePikerSelected.emit(dateValue)
}


 }
