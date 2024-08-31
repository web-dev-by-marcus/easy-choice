import { Component, Input } from '@angular/core';
import { Footer } from './footer.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input({ required: true }) footer!: Footer;
}
