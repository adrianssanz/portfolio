import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-volver-arriba',
  imports: [CommonModule],
  templateUrl: './volver-arriba.component.html',
  styleUrl: './volver-arriba.component.css'
})
export class VolverArribaComponent {
  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = scrollPosition > 100; // Mostrar el botón después de 100px de scroll
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
