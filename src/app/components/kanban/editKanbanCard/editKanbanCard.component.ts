import { ChangeDetectionStrategy, Component, Inject, input, OnInit, signal } from '@angular/core';
import { CardKanban } from '../../../_models/kanban';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogActions,MatDialogClose,MatDialogContent,MatDialogRef,MatDialogTitle,} from '@angular/material/dialog';
import { MaterialTimerPikerComponent } from "../../../shared/Material/materialTimerPiker/materialTimerPiker.component";
import { MaterialTextAreaComponent } from '../../../shared/Material/materialTextArea/materialTextArea.component';
import { MaterialDatePikerComponent } from "../../../shared/Material/materialDatePiker/materialDatePiker.component";
import { MaterialProgressComponent } from '../../../shared/Material/materialProgress/materialProgress.component';
import { MaterialTaskListComponent } from "../../../shared/Material/materialTaskList/materialTaskList.component";
import { MaterialInputComponent } from "../../../shared/Material/materialInput/materialInput.component";
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../_services/Users.service';
import { Users } from '../../../_models/users';
import { MaterialAutocompleteComponent } from "../../../shared/Material/materialAutocomplete/materialAutocomplete.component";


@Component({
  selector: 'edit-kanban-card',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatIconModule, MatInputModule,
    MaterialTimerPikerComponent,
    MaterialTextAreaComponent,
    MaterialDatePikerComponent,
    MaterialProgressComponent, MaterialTaskListComponent, MaterialInputComponent, FormsModule, MaterialAutocompleteComponent],
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
  arrayUsers: Users[] = [];
  title = signal<string|null>(null);
  description= signal<string|null>(null);
  dateSelected= signal<Date>(new Date());
  timerSelected= signal<Date>(new Date());
  percentage=signal<number>(0);


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CardKanban,
    private dialogRef: MatDialogRef<EditKanbanCardComponent>,
    private userService:UsersService,
  ) {}

  ngOnInit(): void {
    // Ejemplo
    let hour= new Date().setHours(21,35);
    let date= new Date().setUTCFullYear(2022,0,15);

    this.description.set("");
    this.timerSelected.set(new Date(hour));
    this.dateSelected.set(new Date(date));


    this.userService.getUsersArray$.subscribe({
      next:(result=>{
        this.arrayUsers=result
      })
    })
  }

  accept(){
    this.dialogRef.close(this.data);
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
    this.data.titleCard = this.title()!;
    this.data.description = this.description()!;
    this.data.progress = this.percentage()!;
    this.data.startDate = this.dateSelected()!;
    this.data.startTime = this.timerSelected()!;
    this.data.edited = true;
    this.accept()
  }

}

