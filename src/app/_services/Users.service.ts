import { Injectable } from '@angular/core';
import { Users } from '../_models/users';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private arrayUsers = new BehaviorSubject<Users[]>([
    {
      id:1,
      name:'Max',
      img:'https://i.pinimg.com/736x/23/2a/db/232adbea0de3524d6d0068bb8c3779cf.jpg',
      position:'Management',
      description:"I'm ready for anything",
      state:1
    },
    {
      id:2,name:'Luna',
      img:'https://i.pinimg.com/736x/bb/f1/6e/bbf16ee0bdb05480942c5618e698520f.jpg',
      position:'Comercial',
      description:"I love playing with my bone",
      state:2
    },
    {
      id:3,name:'Rocky',
      img:'https://i.pinimg.com/736x/f8/e2/cf/f8e2cf014adb8640bf54603e5d7abe17.jpg',
      position:'Sales',
      description:"If you look for me, you will find me.",
      state:1
    },
    {
      id:4,name:'Toby',
      img:'https://i.pinimg.com/736x/d8/7a/39/d87a393339da2834a791934a1232a0e1.jpg',
      position:'Procurement',
      description:"I will always listen to you",
      state:2

    },
    {
      id:5,name:'Nala',
      img:'https://i.pinimg.com/736x/32/b5/7a/32b57a8842aa0a8a8361cc9a785dba6b.jpg',
      position:'Acounting',
      description:"If you ask about me, I'm not here.",
      state:0

    }
  ])

  getUsersArray$ = this.arrayUsers.asObservable();

  constructor() { }




}
