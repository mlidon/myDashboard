import { ChangeDetectionStrategy, Component, input, OnInit, output, signal } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'material-input',
  imports: [MatInputModule,MatFormFieldModule,FormsModule],
  templateUrl: './materialInput.component.html',
  styleUrl: './materialInput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialInputComponent implements OnInit{
  titleLabel = input<string>('Add title card');
  title = signal<string|null>(null);
  data = input<string|null>(null);
  emitterTitle = output<string|null>();


  ngOnInit(): void {
    this.title.set(this.data())
  }

  getTitle(value:string){
    this.title.set(value);
    this.emitterTitle.emit(value)
  }
}
