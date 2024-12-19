import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MaterialButtonFlatComponent } from "../../shared/Material/materialButtonFlat/materialButtonFlat.component";
import { ModalListTask, People } from '../../_models/modals';
import { MatDialog } from '@angular/material/dialog';
import { ModalListTaskComponent } from './modalListTask/modalListTask.component';
import { DatePipe } from '@angular/common';
import { MaterialIconButtonComponent } from "../../shared/Material/materialIconButton/materialIconButton.component";
import { MatCheckboxChange, MatCheckboxModule} from '@angular/material/checkbox';
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
  headerTable:any[]=[{title:"Task",col:"col-2"},{title:"Description",col:"col"},{title:"Date",col:"col-2"},{title:"Members",col:"col"},{title:"Actions",col:"col-1"}]
  nameButton:string="+ Create Task";
  task?:ModalListTask;
  currentId = signal<number>(0);
  incremental: number = 1;
  arrayTaskToDo = signal<ModalListTask[]>([
    {id:1500,checked:false, title:"app development",description:"Development of the to do application", startDate:new Date(),members:[{name:"Marc"},{name:"Nat"}]},
    {id:1501,checked:false, title:"Repair the server",description:"Install new ventilation system and update software", startDate:new Date(),members:[{name:"Vincen"},{name:"Monick"}]},
  ]);
  arrayTaskComplete=signal<ModalListTask[]>([
    {id:1502,checked:true, title:"Buy",description:"Buy more Roma coffee that has been finished", startDate:new Date(),members:[{name:"Michel"},{name:"Patrick"}]}
  ]);
  exempleTodoList:ModalListTask[]=[

  ]
  exempleMembers1:People[]=[{name:"Marc"},{name:"Nat"}]
  exempleMembers2:People[]=[{name:"Michel"},{name:"Patrick"}]
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
  }

  taskChecked(event:MatCheckboxChange,task:ModalListTask){
    if(event.checked){
      task.checked=true;
      this.arrayTaskComplete.update(arr=>[...arr,task]);
      this.UpdateTasks(task);
    }else{
      task.checked=false;
      this.arrayTaskToDo.update(arr=>[...arr,task]);
      this.UpdateTasks(task);
    }
  }


  editTask(task:ModalListTask){
    this.openModalListTask(task);
  }

  UpdateTasks(task:ModalListTask){
    if(task.checked){
      this.arrayTaskToDo.update(arr=>arr.filter(item=>item !== task));
    }else{
      this.arrayTaskComplete.update(arr=>arr.filter(item=>item !==task));
    }
  }

  deleteTask(event:any,task:ModalListTask){
      if(event){
        if(task.checked === true){
          this.arrayTaskComplete.update(arr=>arr.filter(item=>item !==task));
        }else{
          this.arrayTaskToDo.update(arr=>arr.filter(item=>item !== task));
        }
      }
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


