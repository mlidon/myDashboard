import { ChangeDetectionStrategy, Component, input, OnInit, output, signal } from '@angular/core';
import { Chats, Users } from '../../../_models/users';
import { MaterialCardComponent } from "../../../shared/Material/materialCard/materialCard.component";
import { MaterialInputComponent } from "../../../shared/Material/materialInput/materialInput.component";
import { MaterialButtonFlatComponent } from "../../../shared/Material/materialButtonFlat/materialButtonFlat.component";

@Component({
  selector: 'chat-editor',
  imports: [MaterialCardComponent,MaterialInputComponent,MaterialButtonFlatComponent],
  templateUrl: './chatEditor.component.html',
  styleUrl: './chatEditor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatEditorComponent implements OnInit {
  inputUsers = input<Users[]>([]);
  inputUserSelected = input<Users>({});
  isInputEmpty = signal<boolean>(true);
  newChat = signal<Chats>({});
  newDate:Date = new Date();
  meUser = signal<Users>(this.inputUsers()[0])
  isCleanInput:boolean =false;

  ngOnInit(): void {
    this.meUser.set(this.inputUsers()[0]);
  }

  getNewMessage(value:any){
    this.newChat.set({
      userId:this.inputUserSelected().id,
      date:new Date(),
      message:value,
    });
    this.isInputEmpty.set(false);

  }

  sendMessage(value:boolean){
    if(value){
      this.isCleanInput = true;
      this.meUser().chat?.push(this.newChat())
    }
  }
}
