import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import { CardKanban, ColumnKanban } from '../../../_models/kanban';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { EditKanbanCardComponent } from '../editKanbanCard/editKanbanCard.component';

@Component({
  selector: 'new-kanban-card',
  imports: [CdkDropList,CdkDrag, MatButtonModule,MatIconModule,MatMenuModule],
  templateUrl: './newKanbanCard.component.html',
  styleUrl: './newKanbanCard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewKanbanCardComponent {

  readonly dialog = inject(MatDialog);
  newData = input<ColumnKanban>();
  arrayCard:CardKanban[]=[];
  dataCardKanban = output<ColumnKanban>();

  // --- DRAG AND DOP --- //
  drop(event: CdkDragDrop<CardKanban[]>) {
    moveItemInArray(this.arrayCard, event.previousIndex, event.currentIndex);
    this.updateIndex();
    // console.log(this.arrayCard);
  }

  updateIndex(){
    this.arrayCard.forEach((item,index)=>{
      item.id=index;
    })
  }


  addNewCard(idColumn:number, nameColumn:string){

    let newCard = new CardKanban();
    // this.arrayCard.length<0? newCard.id = 1:
    newCard.id = this.arrayCard.length;
    newCard.id +=1;
    newCard.titleCard = "Untitle card " + newCard.id;
    this.arrayCard.push(newCard);
    this.newData()!.card = this.arrayCard;
    this.dataCardKanban.emit(this.newData()!);
  }

  removeCard(id:number){
    let index:number = this.arrayCard.findIndex(col=> col.id === id)
    this.arrayCard.splice(index,1);
  }




  openDialog() {
    this.dialog.open(EditKanbanCardComponent,{
      position:{right:'0'},
      height:'100%',
      
      width:'500px',
      panelClass: 'right-dialog',
      enterAnimationDuration:'300ms',
      exitAnimationDuration:'300ms'
    });
  }
}
