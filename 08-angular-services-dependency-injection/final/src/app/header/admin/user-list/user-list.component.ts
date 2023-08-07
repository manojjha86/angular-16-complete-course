import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from './../../../app.module';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService: UserService){

  }
  userList = this.userService.GetAllUsers();

  ShowUserDetails(user: User){
    this.userService.OnShowUserDetails(user);
  }
}
