import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectedUser() {}
}
