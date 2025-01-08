import
 { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Make sure 'standalone: true' is present
  imports: [HeaderComponent] // Import HeaderComponent here
})
export class AppComponent {
  title = 'my-app';
}