import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CardKanban, ColumnKanban } from '../../../_models/kanban';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NewKanbanCardComponent } from '../newKanbanCard/newKanbanCard.component';

@Component({
  selector: 'new-kanban-column',
  imports: [MatButtonModule,
            MatMenuModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,NewKanbanCardComponent],
  templateUrl: './newKanbanColumn.component.html',
  styleUrl: './newKanbanColumn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewKanbanColumnComponent{
  title?:string;
  newCard?: CardKanban;

  isTitle= signal<boolean>(false);
  newData = signal<ColumnKanban>({});

  dataColumnKanaban= input<ColumnKanban>();
  dataCardKanban = input<CardKanban>();
  deleteColumnKanaban = output<number>()
  updateColumnKanaban = output<ColumnKanban>();


  // --- CRUD ACCTIONS COLUMN --- //
  removeColumn(index:number){
    this.deleteColumnKanaban.emit(index);
  }

  updateColumn(title:string, index?:number, event?:ColumnKanban){
    // Add new data
    this.newData.update(data=>({
      titleColumn:title,
      id:this.dataColumnKanaban()!.id,
      card:event?.card
    }))


    // Send newData to Array component father
    this.updateColumnKanaban.emit(this.newData())
    this.isTitle.set(false);
  }

  updateCardsColumn(event?:ColumnKanban){
    console.log("Update cards into column",event);

    let index = this.dataColumnKanaban()?.id;
    let title = this.dataColumnKanaban()?.titleColumn;
   // Add new data
    this.newData.update(data=>({
      titleColumn:title,
      id:index,
      card:event?.card
    }))
    this.updateColumnKanaban.emit(this.newData())
    this.updateColumn(this.newData().titleColumn!, this.newData().id, this.newData());
  }



 }
