import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { NewKanbanColumnComponent } from "./newKanbanColumn/newKanbanColumn.component";
import { ColumnKanban } from '../../_models/kanban';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'kanban',
  imports: [CdkDropList, CdkDrag, NewKanbanColumnComponent, MatButtonModule],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanComponent {

  newColumn:ColumnKanban[] =[]
  index?:number;


  drop(event: CdkDragDrop<ColumnKanban[]>) {
    moveItemInArray(this.newColumn, event.previousIndex, event.currentIndex);
    this.updateIndex();
    console.log(this.newColumn);
  }

  updateIndex(){
    this.newColumn.forEach((item,index)=>{
      item.index=index;
    })
  }

  addNewKanabanColumn(){
    let kanbanColumn: ColumnKanban = new ColumnKanban();
    kanbanColumn.index = this.newColumn.length;
    this.newColumn.push(kanbanColumn)
  }

  updateKanabanColumn(column:ColumnKanban){

    if(column){
      this.newColumn[column.index!] = column;
    }
    console.log(this.newColumn);

  }

  removeKanabanColumn(index:any){
    this.newColumn.splice(index,1);
  }

}
