import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecycle-hook';
  inputVal: string = '';
  toDestroy: boolean = false;
  constructor(){
    console.log('App Component constructor called!');
  }

  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit Hook of AppComponent called');
  // }
  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked Hook of AppComponent called');
  // }

  onBtnClicked(inputEl: HTMLInputElement){
      this.inputVal = inputEl.value;
  }

  DestroyComponent(){
    this.toDestroy = !this.toDestroy;
  }
}
