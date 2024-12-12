import { ChangeDetectionStrategy, Component, input, OnInit, output, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ColumnKanban } from '../../../_models/kanban';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'new-kanban-column',
  imports: [MatButtonModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInputModule,FormsModule],
  templateUrl: './newKanbanColumn.component.html',
  styleUrl: './newKanbanColumn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewKanbanColumnComponent implements OnInit{
  title?:string;
  isTitle= signal<boolean>(false);
  newData = signal<ColumnKanban>({});
  dataColumnKanaban= input<ColumnKanban>();
  deleteColumnKanaban = output<number>()
  updateColumnKanaban = output<ColumnKanban>();


  ngOnInit(): void {
    this.title = this.newData().titleColumn;
  }

  removeColumn(index:number){
    this.deleteColumnKanaban.emit(index);
  }

  updateColumn(title:string, index:number){
    title == ""? title="Untitle List":title;
    index == undefined? index = 0:index;
    this.newData.update(data=>({
      titleColumn:title,
      index:index
    }))
    this.isTitle.set(false);
    this.updateColumnKanaban.emit(this.newData())

  }



 }
