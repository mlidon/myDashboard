import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { MaterialCardComponent } from "../../../shared/Material/materialCard/materialCard.component";
import { Users } from '../../../_models/users';

@Component({
  selector: 'card-users',
  imports: [MaterialCardComponent],
  templateUrl: './cardUsers.component.html',
  styleUrl: './cardUsers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardUsersComponent implements OnInit{

  inputUser = input<Users>({});
  colorState = signal<string|null>(null);

  ngOnInit(): void {
    this.stateUser(this.inputUser().state!)
  }

  stateUser(value:number){
    switch(value){
      case 0:
        this.colorState.set("trafic-light-red");
        break;
      case 1:
        this.colorState.set("trafic-light-green");
        break;
      case 2:
        this.colorState.set("trafic-light-orange");
        break;
    }
  }
}
