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
  listaNovo: number = 1;
  user: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    // this.getUsers();
  }
  
  create(user: User){
    this.users.push(user);
    this.listaNovo = 1;
  }

  destroy(user: User){
    const i = this.users.indexOf(user);
    this.users.splice(i,1);
  }

  update(users: any){
    const i = this.users.indexOf(users.original);
    this.users[i] = users.edited;
    this.listaNovo = 1;    
  }

  backtolist(){
    this.listaNovo = 1;
  }

  changetoedit(user: any){
    this.listaNovo = 3;
    this.user = user;
  }

  getUsers(){
    // this._userService.getUsers()
    // .then(users => this.users = users)
  }

}
