import { Component, DoCheck, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements DoCheck {

  constructor(){
    effect(() => console.log('NEW COUNTER VALUE = ' + this.counter()));
  }
   counter = signal(0);

   message = signal<string[]>([]);

   doubleCounter = computed(() => this.counter() * 2);

   increment(){
    //this.counter.set(this.counter() + 1);
    this.counter.update((old) => old + 1);
    //this.message.update((prevValue) => [...prevValue, 'Current value of counter is: ' + this.counter()]));
    this.message.mutate((prevValue) => prevValue.push('Current value of counter is: ' + this.counter()));
   }

   decrement(){
    this.counter.update((old) => old - 1);
    //this.message.pop();
    this.message.mutate((prevValue) => prevValue.pop());
   }

   ngDoCheck(){
    console.log('CHANGE DETECTION CYCLE CALLED');
   }
}
