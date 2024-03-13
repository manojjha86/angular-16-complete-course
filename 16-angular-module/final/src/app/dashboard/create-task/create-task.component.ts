import { Component, EventEmitter, Output, Input, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Model/Task';
import { CounterService } from 'src/app/Services/counter.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  countService: CounterService = inject(CounterService);
  @Input() isEditMode: boolean = false;

  @Input() selectedTask: Task;

  @ViewChild('taskForm') taskForm: NgForm;

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  ngOnInit(){
    this.countService.increment('CreateTaskComponent');
  }
  
  ngAfterViewInit(){
    setTimeout(() => {
      this.taskForm.form.patchValue(this.selectedTask);
    }, 0);
    
  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  OnFormSubmitted(form: NgForm){
    this.EmitTaskData.emit(form.value);
    this.CloseForm.emit(false);
  }
}
