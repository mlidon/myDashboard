import { ChangeDetectionStrategy, Component, computed, model, OnInit, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { Users } from '../../../_models/users';
import { UsersService } from '../../../_services/Users.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
@Component({
  selector: 'material-autocomplete',
  imports: [MatFormFieldModule, MatChipsModule, MatIconModule, MatAutocompleteModule, FormsModule],
  templateUrl: './materialAutocomplete.component.html',
  styleUrl: './materialAutocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialAutocompleteComponent implements OnInit {
  arrayUsers: Users[] = [];
  users = signal<Users>(new Users())
  currentUser = model('');
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredUsers = computed(() => {
    const currentUsers = this.currentUser().toLowerCase();
    return currentUsers
      ? this.arrayUsers.filter(us => us.name?.toLowerCase().includes(currentUsers))
      : this.arrayUsers.slice();
  });



  constructor(
    private userService: UsersService,
  ){}


  ngOnInit(): void {
    this.userService.getUsersArray$.subscribe({
      next:(result=>{this.arrayUsers=result})
    })
  }

  add(event: MatChipInputEvent): void {

    // const value:Users = (event.value || '').trim();

    // // Add our fruit
    // if (value) {
    //   this.users.update(users:Users => [...users, value]);
    // }

    // // Clear the input value
    // this.currentUser.set('');
  }


  remove(user: Users): void {
    const index = this.arrayUsers.indexOf(user);


  }

  selected(event: MatAutocompleteSelectedEvent): void {


    // this.Users.update(user => [...fruits, event.option.viewValue]);
    // this.currentFruit.set('');
    // event.option.deselect();
  }

 }
