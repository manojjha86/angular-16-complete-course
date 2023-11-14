import { Component } from '@angular/core';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent{
  tasks: string[] = ['task 1', 'task 2', 'task 3']
}
