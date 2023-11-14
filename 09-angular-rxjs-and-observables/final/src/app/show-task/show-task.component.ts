import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit{
  tasks: string[] = ['task 1', 'task 2', 'task 3']

  taskService: TaskService = inject(TaskService);

  ngOnInit(){
    this.taskService.CreateTask.subscribe((value) => {
      this.tasks.push(value);
    });
  }
}
