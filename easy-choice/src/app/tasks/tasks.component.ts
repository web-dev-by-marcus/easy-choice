import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  // @Output() task = new EventEmitter();

  // selectTask() {
  //   return this.task.emit(this.name);
  // }
}
