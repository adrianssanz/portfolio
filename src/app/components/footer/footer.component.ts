import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private languageService: LanguageService){}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  englishActive():boolean{
    return this.languageService.getLanguage();
  }
}
