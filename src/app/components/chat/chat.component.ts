import { ChangeDetectionStrategy, Component, computed, OnInit, signal } from '@angular/core';
import { MaterialCardComponent } from "../../shared/Material/materialCard/materialCard.component";
import { MaterialInputComponent } from "../../shared/Material/materialInput/materialInput.component";
import {MatBadgeModule} from '@angular/material/badge';
import { CardUsersComponent } from "./cardUsers/cardUsers.component";
import { UsersService } from '../../_services/Users.service';
import { Users } from '../../_models/users';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChatEditorComponent } from "./chatEditor/chatEditor.component";
@Component({
  selector: 'app-chat',
  imports: [MaterialCardComponent, MaterialInputComponent, MatBadgeModule, CardUsersComponent, ChatEditorComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('userAnimation',[
      transition(':enter',[
        style({opacity:0, transform:'translateY(20px)'}),
        animate('300ms ease-out',style({opacity:1,transform:'translateY(0)'}))
      ]),
      transition(':leave',[
        animate('300ms ease-in'),
        style({opacity:0, transform:'translateY(20px)'})
      ])
    ])
  ]
})
export class ChatComponent implements OnInit{
  users = signal<Users[]>([]);
  userChatSelected = signal<Users>({});
  search = signal<string>('');

  filteredUsers = computed(() => {
    const searchTerm = this.search()?.toLowerCase().trim();
    return this.users().filter(user =>
      (searchTerm === '' || user.name?.toLowerCase().includes(searchTerm!)) && user.id !== 1
    );
  });


  constructor(private usersService:UsersService){
  }

  ngOnInit(): void {
    this.usersService.getUsersArray$.subscribe({
      next:(resp=>{
        console.log(resp);
        this.users.set(resp);
      })
    })

    this.userChatSelected.set(this.users()[1]);
  }

  getInputSearch(event:any){
     this.search.set(event||'');
  }

  userSelected(user:Users){
    this.userChatSelected.set(user);
  }
}
