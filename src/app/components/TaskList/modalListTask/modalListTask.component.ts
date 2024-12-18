import { ChangeDetectionStrategy, Component, Inject, input, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalListTask, People } from '../../../_models/modals';
import { MaterialIconButtonComponent } from "../../../shared/Material/materialIconButton/materialIconButton.component";
import { MaterialInputComponent } from "../../../shared/Material/materialInput/materialInput.component";
import { MaterialTextAreaComponent } from "../../../shared/Material/materialTextArea/materialTextArea.component";
import { MaterialDatePikerComponent } from "../../../shared/Material/materialDatePiker/materialDatePiker.component";
import { MaterialButtonFlatComponent } from "../../../shared/Material/materialButtonFlat/materialButtonFlat.component";
import { MaterialInputWithChipsComponent } from '../../../shared/Material/materialInputWithChips/materialInputWithChips.component';


@Component({
  selector: 'modal-list-task',
  imports: [MaterialIconButtonComponent, MaterialInputComponent, MaterialTextAreaComponent, MaterialDatePikerComponent, MaterialButtonFlatComponent, MaterialInputComponent,MaterialInputWithChipsComponent],
  templateUrl: './modalListTask.component.html',
  styleUrl: './modalListTask.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalListTaskComponent implements OnInit{

  dataIdTask = signal<number|null>(null);
  titleTask = signal<string|null>(null);
  classBtnAccept =signal<string|null>(null);
  descriptionTask = signal<string|null>(null);
  dateStartTask = signal<Date>(new Date());
  memberTask = signal<People[]>([]);
  idDisabledButtonAccept = signal<boolean>(true);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:ModalListTask,
    private dialogRef:MatDialogRef<ModalListTaskComponent>,
  ){}

  ngOnInit(): void {
    if(this.data.id != -1){
      this.dataIdTask.set(this.data.id!);
      this.titleTask.set(this.data.title!);
      this.descriptionTask.set(this.data.description!);
      let date = this.data.startDate!.toString()
      this.dateStartTask.set(new Date(date));
      this.memberTask.set(this.data.members!);
    }
  }

  //Get data of components
  getTitleTask(event:any){
    this.titleTask.set(event);
    this.updateData()
  }
  getDescriptionTask(event:any){
    this.descriptionTask.set(event);
    this.updateData()
  }
  getDateTask(event:any){
    this.dateStartTask.set(event);
    this.updateData()
  }
  getMembers(event:People[]){
    this.memberTask.set(event)
    this.updateData()
  }


  updateData(){
    let array: People[] = []
    this.memberTask().forEach(member => {
      array.push(member);
    });

    this.data.members = array;
    this.data.title= this.titleTask()!;
    this.data.description = this.descriptionTask()!;
    this.data.startDate = this.dateStartTask()!;

    if((this.data.title && this.data.description && this.data.startDate && this.data.members) != null){
      this.idDisabledButtonAccept.set(false);
      this.classBtnAccept.set('BgBlue');
    }else{
      this.idDisabledButtonAccept.set(true);
      this.classBtnAccept.set('BgGray');
    }
  }


  accept(){


    this.dialogRef.close(this.data);
  }

  cancel(){
    this.dialogRef.close(false);
  }

}
