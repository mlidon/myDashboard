import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Tasks } from '../../../_models/kanban';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'material-task-list',
  imports: [MatIconModule,MatButtonModule,FormsModule,MatInputModule,MatFormFieldModule,MatCardModule,MatCheckboxModule,CommonModule],
  templateUrl: './materialTaskList.component.html',
  styleUrl: './materialTaskList.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTaskListComponent {

  titleLabel = input<string>('List tasks');
  counter = signal<number>(0);
  total = signal<number>(0);
  task?:string;
  listTasks: Tasks[]=[];
  emmitterPercentageTask =  output<number>();
  emmitterTaskList = output<Tasks[]>();

  // Add elements by Array list and Updated
  addListTask(value:string){
    let newTask = { name:value, completed:false}
    newTask? this.listTasks.push(newTask): this.listTasks;
    this.total.set(this.listTasks.length)
    this.task='';
    this.percentageTasks();
    this.emmitterTaskList.emit(this.listTasks)
  }

  // Delete elements by Array list and Updated
  deleteElementListTask(element:string,index:number){
    this.listTasks.splice(index,1);
    if(this.listTasks.length === 0){
      this.total.set(0);
      this.counter.set(0);
    }else{
      this.total.set(this.listTasks.length);
    }
    this.percentageTasks();
    this.emmitterTaskList.emit(this.listTasks)
  }

  // Update Array list Task by checked
  updateElementListTask(event:any,index:number){
    this.listTasks[index].completed = event.checked;
    if(this.listTasks.length>0){
      event.checked? this.counter.set(this.counter()+1):this.counter.set(this.counter()-1);
      this.percentageTasks()
    }
    this.emmitterTaskList.emit(this.listTasks)
  }

  // Update percentage
  percentageTasks(){
    let selected = this.counter();
    let total = this.total();
    let result = ((selected/total)*100).toFixed(0);
    this.emmitterPercentageTask.emit(parseInt(result));
  }


}
