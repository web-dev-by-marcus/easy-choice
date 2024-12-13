import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model';
// import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
