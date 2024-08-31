import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaComponent } from './sala/sala.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SalaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat';
}
