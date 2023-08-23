import { Component } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {
   counter: number = 0;

   message: string[] = [];

   increment(){
    this.counter++;
    this.message.push('Current counter value is: ' + this.counter);
   }

   decrement(){
    this.counter--;
    this.message.pop();
   }
}
