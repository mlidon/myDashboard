import { ChangeDetectionStrategy, Component, input, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'material-text-area',
  imports: [MatInputModule, FormsModule],
  templateUrl: './materialTextArea.component.html',
  styleUrl: './materialTextArea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTextAreaComponent implements OnInit{
  titleLabel = input<string|null>(null);
  data = input<string|null>(null);
  emitterDescription = output<string|null>();
  description = signal<string|null>(null);

  constructor(){}

  ngOnInit(): void {
    this.description.set(this.data())
  }

  getDescription(value:string){
    this.description.set(value);
    this.emitterDescription.emit(value)
  }


}
