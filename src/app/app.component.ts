import { Component, HostListener } from '@angular/core';
import { EstructuraComponent } from './layout/estructura/estructura.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VolverArribaComponent } from './components/volver-arriba/volver-arriba.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Make sure 'standalone: true' is present
  imports: [CommonModule, RouterOutlet, VolverArribaComponent], // Import HeaderComponent here
})
export class AppComponent {
  title = 'my-app';

  x = 0;
  y = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }
}
