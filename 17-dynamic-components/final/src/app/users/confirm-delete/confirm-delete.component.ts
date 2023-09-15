import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor() { }

  @Input() usertoDelete: User;

  @Output()
  OnConfirmation: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
  }

  OnConfirmationBtmClicked(value: boolean){
    console.log(value);
    this.OnConfirmation.emit(value);
  }

}
