import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { NewKanbanColumnComponent } from "./newKanbanColumn/newKanbanColumn.component";
import { ColumnKanban } from '../../_models/kanban';
import {MatButtonModule} from '@angular/material/button';
import { NewKanbanCardComponent } from "./newKanbanCard/newKanbanCard.component";

@Component({
  selector: 'kanban',
  imports: [CdkDropList, CdkDrag, NewKanbanColumnComponent, MatButtonModule],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanComponent {

  arrayColumn:ColumnKanban[] =[]
  index?:number;
  counter = signal<number>(0);
  // --- DRAG AND DOP --- //
  drop(event: CdkDragDrop<ColumnKanban[]>) {
    moveItemInArray(this.arrayColumn, event.previousIndex, event.currentIndex);
    this.updateIndex();
    // console.log(this.arrayColumn);
  }

  updateIndex(){
    this.arrayColumn.forEach((item,index)=>{
      item.id = index;
      item.id += 1;
    })
  }

  // --- CRUD COLUMN KANABAN --- //
  addNewKanabanColumn(){
    let kanbanColumn: ColumnKanban = new ColumnKanban();
    // this.arrayColumn.length<0? kanbanColumn.index = 0 : kanbanColumn.index = this.arrayColumn.length;

    kanbanColumn.id = this.arrayColumn.length;
    kanbanColumn.id += 1;
    this.counter.set(kanbanColumn.id)
    kanbanColumn.titleColumn = "Untitle List " + this.counter();

    this.arrayColumn.push(kanbanColumn)
  }

  updateKanabanColumn(column:ColumnKanban){
    // console.log(column);
    this.arrayColumn.find(col=>col.id === column.id)!.titleColumn = column.titleColumn
    // console.log(this.arrayColumn);
  }

  removeKanabanColumn(id:any){
    let index:number = this.arrayColumn.findIndex(col=> col.id === id)
    this.arrayColumn.splice(index,1);
  }

}
