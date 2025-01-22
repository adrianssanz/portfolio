import
 { Component } from '@angular/core';
import { EstructuraComponent } from './layout/estructura/estructura.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Make sure 'standalone: true' is present
  imports: [EstructuraComponent] // Import HeaderComponent here
})
export class AppComponent {
  title = 'my-app';
}