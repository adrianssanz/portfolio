import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sobre-mi',
  imports: [CommonModule],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css',
})
export class SobreMiComponent {
  constructor(private languageService: LanguageService) {}

  englishActive(): boolean {
    return this.languageService.getLanguage();
  }
}
