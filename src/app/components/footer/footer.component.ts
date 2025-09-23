import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(
    private languageService: LanguageService,
    private router: Router,
    private title: Title
  ) {}

  scrollToTop(): void {
    const currentRoute = this.router.url;
    if (currentRoute === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.router.navigate(['/']);
      this.title.setTitle(`Adrián Sanz | Portfolio`);
    }
  }

  englishActive(): boolean {
    return this.languageService.getLanguage();
  }
}
