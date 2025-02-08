import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})
export class HeaderComponent{
  email = 'sanzadrian@hotmail.es';

  constructor(private languageService: LanguageService ) {}

  englishActive():boolean{
    return this.languageService.getLanguage();
  }
}
