import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() add = new EventEmitter<string>();
}
