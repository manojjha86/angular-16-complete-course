import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../Services/user.service';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ViewContainer } from '../viewContainer.directive';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, private componentFactoryResolver: ComponentFactoryResolver) { 

  }

  users: User[] = [];
  showConfirmDeleteComponent: boolean = false;
  userToDelete: User;
  @ViewChild(ViewContainer, {static: false}) container: ViewContainer;

  onConfirmationObs;

  ngOnInit() {
    this.users = this.userService.users;
  }

  OnDeleteClicked(user: User){
    // this.showConfirmDeleteComponent = true;
    this.userToDelete = user;
    this.showConfirmDelete(this.userToDelete);
  }


  OnUserDeletionConfirmed(value: boolean){
    this.showConfirmDeleteComponent = false;
    if(value){
      //Delete the user
      let index = this.userService.users.indexOf(this.userToDelete);
      this.userService.users.splice(index, 1);
    }
  }

  showConfirmDelete(user: User){

    //1. Create an instance of ConfirmDelete Component
    const confirmDelereComponenetFactory = 
              this.componentFactoryResolver
              .resolveComponentFactory(ConfirmDeleteComponent);

    const containerViewRef = this.container.viewContainer;
    containerViewRef.clear();

    //Rendering the component in the DOM
    const componentRef =containerViewRef.createComponent(confirmDelereComponenetFactory);
    componentRef.instance.usertoDelete = user;

    this.onConfirmationObs = componentRef.instance.OnConfirmation.subscribe((data) => {
      this.onConfirmationObs.unsubscribe();
      containerViewRef.clear();

      if(data){
        //Delete the user
        let index = this.userService.users.indexOf(this.userToDelete);
        this.userService.users.splice(index, 1);
      }
    })
  }
}
