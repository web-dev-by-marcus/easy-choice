import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskComponent } from '../task/task.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, AddTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class TasksModule {}
