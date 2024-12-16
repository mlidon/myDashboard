import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'material-progress',
  imports: [MatProgressBarModule],
  templateUrl: './materialProgress.component.html',
  styleUrl: './materialProgress.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialProgressComponent implements OnInit{

  percentage = input<number>(0);


  ngOnInit(): void {
    
  }


}
