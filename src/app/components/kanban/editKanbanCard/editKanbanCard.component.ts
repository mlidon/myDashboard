import { ChangeDetectionStrategy, Component, Inject, input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'edit-kanban-card',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './editKanbanCard.component.html',
  styleUrl: './editKanbanCard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditKanbanCardComponent {
  // title = input.required<string>();
  // @ViewChild('modalContent')


  // constructor(@Inject(MAT_DIALOG_DATA) public modalData: any,
  //             private dialogRef:MatDialogRef<EditKanbanCardComponent>,
  //             public dialog:MatDialog
  // ){}


  // accept(){
  //   this.dialogRef.close(true);
  // }

  // cancel(){
  //   this.dialogRef.close(false);
  // }



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
