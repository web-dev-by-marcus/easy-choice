import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users.ts';
import { TasksComponent } from './tasks/tasks.component';
import { FooterComponent } from './footer/footer.component';
import { DUMMY_FOOTER_DATA } from './dummy-footer-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;
  footerData = DUMMY_FOOTER_DATA;
  addTask?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  get addedTask() {
    return 'A Task was added';
  }

  onSelectUser(id: string) {
    return (this.selectedUserId = id);
  }

  // selectTask(name: string) {
  //   console.log(`the name clicked is ${name}`);
  // }
}
