import { Injectable } from "@angular/core";

@Injectable()
export class CounterService{
    counter: number = 0;

    increment(componentName: string){
        console.log(componentName + ": " + this.counter++);
    }
}