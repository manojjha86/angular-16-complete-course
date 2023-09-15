import { Injectable } from "@angular/core";
import { User } from "../Models/User";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    users: User[] = [
        new User(1, 'John Smith', 'Male', 'Yearly', 999, true),
        new User(2, 'Mark Vought', 'Male', 'Monthly', 199, true),
        new User(3, 'Sarah King', 'Female', 'Quaterly', 399, false),
        new User(4, 'Merry Jane', 'Female', 'Yearly', 999, true),
        new User(5, 'Jonas Fleming', 'Male', 'Monthly', 199, false)
    ]
}