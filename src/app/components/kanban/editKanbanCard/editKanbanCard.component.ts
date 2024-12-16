import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { CardKanban } from '../../../_models/kanban';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle} from '@angular/material/dialog';
import { MaterialTimerPikerComponent } from "../../../shared/Material/materialTimerPiker/materialTimerPiker.component";
import { MaterialTextAreaComponent } from '../../../shared/Material/materialTextArea/materialTextArea.component';
import { MaterialDatePikerComponent } from "../../../shared/Material/materialDatePiker/materialDatePiker.component";
import { MaterialProgressComponent } from '../../../shared/Material/materialProgress/materialProgress.component';
import { MaterialTaskListComponent } from "../../../shared/Material/materialTaskList/materialTaskList.component";
import { MaterialInputComponent } from "../../../shared/Material/materialInput/materialInput.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'edit-kanban-card',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatIconModule, MatInputModule,
    MaterialTimerPikerComponent,
    MaterialTextAreaComponent,
    MaterialDatePikerComponent,
    MaterialProgressComponent, MaterialTaskListComponent, MaterialInputComponent,FormsModule],
  templateUrl: './editKanbanCard.component.html',
  styleUrl: './editKanbanCard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditKanbanCardComponent implements OnInit{

  cardKanban:CardKanban= new CardKanban();
  dataIdCard = input<number>(0);
  // emitterCardEdited = output<CardKanban>();


  titleLabelDescription:string = "Description"
  titleLabelPickerDate:string = "Start Date";
  titleLabelPickerTime:string = "Start Time";
  titleLabelTaskList:string = "Add task to list";

  title = signal<string|null>(null);
  description= signal<string|null>(null);
  dateSelected= signal<Date>(new Date());
  timerSelected= signal<Date>(new Date());
  percentage=signal<number>(0);
  dialogRef: any;



  ngOnInit(): void {
    // Ejemplo
    let hour= new Date().setHours(21,35);
    let date= new Date().setUTCFullYear(2022,0,15);

    this.description.set("Hola esto es un texto de prueba");
    this.timerSelected.set(new Date(hour));
    this.dateSelected.set(new Date(date));
  }

  accept(){
    this.dialogRef.close(true);
  }

  cancel(){
    this.dialogRef.close(false);
  }

// FUNCIONES
setTitle(title:any){
  this.title.set(title);
}

setDescription(description:any){
  this.description.set(description);
}

setSelectedDate(newdate:any){
  this.dateSelected.set(newdate)
}

setSelectedTime(time:any){
  this.timerSelected.set(time)
}

setPercentage(value:any){
  this.percentage.set(value);
}

setTaskList(value:any){
  console.log(value);

}

saveComponent(){
  this.cardKanban ={
    id: 0,
    titleCard: this.title()!,
    description: this.description()!,
    startDate:   this.dateSelected()!,
    timerDate:   this.timerSelected()!,
    progress:    this.percentage()!,
    titleTask:  "" ,
    Comments:   "",
  }
  //this.dialogRef(this.cardKanban)
  //this.emitterCardEdited.emit(this.cardKanban);
}



  // title = input.required<string>();
  // @ViewChild('modalContent')


  // constructor(@Inject(MAT_DIALOG_DATA) public modalData: any,
  //             private dialogRef:MatDialogRef<EditKanbanCardComponent>,
  //             public dialog:MatDialog
  // ){}






  // openDialogEdit(id:number):void{
  //   let modal = new Article();
  //   modal.Id = id;

  //   const dialogRef = this.dialog.open(
  //     EditKanbanCardComponent,
  //     {
  //       autoFocus : 'dialog',
  //       minWidth:'45%',
  //       minHeight:"100vh",
  //       data: {
  //         modal: modal,
  //       },
  //       closeOnNavigation: false,
  //       disableClose: true,
  //       panelClass: 'loadImage-modalbox',
  //       position:{right:'0px',top:'0px'},
  //     });
  //   dialogRef.afterClosed().subscribe( (result: any) => {
  //     this.cancel();
  //   });
  // }

}

