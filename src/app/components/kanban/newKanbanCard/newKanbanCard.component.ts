import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import { CardKanban, ColumnKanban } from '../../../_models/kanban';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { EditKanbanCardComponent } from '../editKanbanCard/editKanbanCard.component';
import { MaterialProgressComponent } from "../../../shared/Material/materialProgress/materialProgress.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'new-kanban-card',
  imports: [CdkDropList, CdkDrag, MatButtonModule, MatIconModule, MatMenuModule, MaterialProgressComponent,FormsModule,CommonModule],
  templateUrl: './newKanbanCard.component.html',
  styleUrl: './newKanbanCard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewKanbanCardComponent implements OnInit {

  readonly dialog = inject(MatDialog);
  newData = input<ColumnKanban>();
  newColumns = input<ColumnKanban[]>()
  arrayCard:CardKanban[]=[];
  dataCardKanban = output<ColumnKanban>();

  constructor(){

  }

  ngOnInit(): void {
  }

  // --- DRAG AND DOP --- //
  drop(event: CdkDragDrop<CardKanban[]>) {
    moveItemInArray(this.arrayCard, event.previousIndex, event.currentIndex);
    this.updateIndex();
  }

  updateIndex(){
    this.arrayCard.forEach((item,index)=>{
      item.id=index;
    })
  }

  addNewCard(idColumn:number, nameColumn:string){
    let newCard = new CardKanban();
    newCard.idColumn = this.newData()!.id!;
    newCard.id = this.arrayCard.length;
    newCard.id +=1;
    newCard.titleCard = "Untitle card " + newCard.id;
    newCard.edited = false;
    this.arrayCard.push(newCard);
    this.newData()!.card = this.arrayCard;
    this.dataCardKanban.emit(this.newData()!);
  }

  removeCard(id:number){
    let index:number = this.arrayCard.findIndex(col=> col.id === id)
    this.arrayCard.splice(index,1);
  }

  updateEditCard(editCard:CardKanban){
    let index = this.arrayCard.findIndex(element=>element.id === editCard.id)
    this.arrayCard[index] = editCard;
    this.newData()!.card = this.arrayCard;
    this.dataCardKanban.emit(this.newData()!);
  }

  openDialog(id?:number) {
    let modal = new CardKanban();
    id!=null? modal.id = id : modal.id = undefined;
    const dialogRef = this.dialog.open(EditKanbanCardComponent,{
      position:{right:'0'},
      height:'100%',
      width:'500px',
      data:modal,
      panelClass: 'right-dialog',
      enterAnimationDuration:'300ms',
      exitAnimationDuration:'300ms'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateEditCard(result!);

    });
  }
}
