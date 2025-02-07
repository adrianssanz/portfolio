import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent {
  constructor(private languageService: LanguageService) {};

  title = 'my-app';

  //Efecto glow cursor

  x = 0;
  y = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  //Boton volver arriba

  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = scrollPosition > 100;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  //Boton cambiar idioma

  englishActive():boolean{
    return this.languageService.getLanguage();
  }

  changeLanguage(): void{
    this.languageService.toggleLanguage();
    window.location.reload();
  }
}
