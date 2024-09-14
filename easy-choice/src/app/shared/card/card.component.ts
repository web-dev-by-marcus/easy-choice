import { Component } from '@angular/core';
import { UserComponent } from '../../user/user.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
