import { Injectable, EventEmitter } from '@angular/core';
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService{
    users: User[] = [
        new User('Steve Smith', 'Male', 'Monthly', 'Active'),
        new User('Mery Jane', 'Female', 'Yearly', 'Inactive'), 
        new User('Mark Tyler', 'Male', 'Quaterly', 'Active') 
    ];

    constructor(private logger: LoggerService){

    }

    OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

    OnShowUserDetails(user: User){
        this.OnUserDetailsClicked.emit(user);
    }

    GetAllUsers(){
        return this.users;
    }

    CreateUser(name: string, gender: string, subType: string, status: string){
        let user = new User(name, gender, subType, status);
        this.users.push(user);
        this.logger.LogMessage(name, status);
    }
}