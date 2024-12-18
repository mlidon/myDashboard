import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MaterialButtonFlatComponent } from "../../shared/Material/materialButtonFlat/materialButtonFlat.component";
import { ModalListTask } from '../../_models/modals';
import { MatDialog } from '@angular/material/dialog';
import { ModalListTaskComponent } from './modalListTask/modalListTask.component';
import { DatePipe } from '@angular/common';
import { MaterialIconButtonComponent } from "../../shared/Material/materialIconButton/materialIconButton.component";
import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'task-list',
  imports: [MatCardModule, MaterialButtonFlatComponent, DatePipe, MaterialIconButtonComponent, MatCheckboxModule,MatChipsModule],
  templateUrl: './TaskList.component.html',
  styleUrl: './TaskList.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit{

  readonly dialog = inject(MatDialog);
  headerTable:any[]=[{title:"Title",col:"col-2"},{title:"Description",col:"col"},{title:"Date",col:"col-2"},{title:"Members",col:"col"},{title:"Actions",col:"col-1"}]
  nameButton:string="+ Create Task";
  arrayTaskToDo = signal<ModalListTask[]>([]);
  arrayTaskComplete:ModalListTask[]=[];
  task?:ModalListTask;
  currentId = signal<number>(0);
  incremental: number = 1;

  ngOnInit(): void {

  }

  clickedNewTask(isClick:boolean){
    if(isClick){
      this.openModalListTask();
    }
  }

  addNewClass(task:ModalListTask){
    if(task.id == -1){
      this.currentId.update(x=>x+1);
      task.id =  this.currentId();
      this.arrayTaskToDo.update(arr=>[...arr,task]);
    }else{
      this.arrayTaskToDo.update(arr=>[...arr]);
    }
    console.log(task.id);
  }



  editTask(task:ModalListTask){
    this.openModalListTask(task);
  }

  deleteTask(task:ModalListTask,index:number){
    this.arrayTaskToDo.update(arr=>arr.filter(item=>item !== task))
  }

  // --- MODALS --- //
  openModalListTask(task?:ModalListTask){

    let modal = new ModalListTask();
    if (task){
      modal = task
    }else{
      modal.id=-1;
    }
    const dialogRef = this.dialog.open(ModalListTaskComponent,{
      position:{right:'0'},
      height:'100%',
      width:'500px',
      data:modal,
      panelClass: 'right-dialog',
      enterAnimationDuration:'300ms',
      exitAnimationDuration:'300ms'
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result == false){
        return
      }else{

        this.addNewClass(result)
      }
    });
  }

}


