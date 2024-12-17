import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardKanban, ColumnKanban } from '../../_models/kanban';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  private arrayByColumns = new BehaviorSubject<CardKanban[]>([]);

  constructor() { }

  //Recuperar las cards
  cardByColumn$ = this.arrayByColumns.asObservable();
  //Obtener las cards
  getCardsByColumns(column:CardKanban[]){
    this.arrayByColumns.next(column);
    console.log("Service",column);

  }


}
