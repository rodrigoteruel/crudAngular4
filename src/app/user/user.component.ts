import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [
    new User(1,"First","Last","email@email.com"),
    new User(2,"Second","Last","email@email.com"),
    new User(3,"Third","Last","email@email.com")
  ];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    // this.getUsers();
  }
  
  create(user: User){
    this.users.push(user);
  }

  getUsers(){
    // this._userService.getUsers()
    // .then(users => this.users = users)
  }

}