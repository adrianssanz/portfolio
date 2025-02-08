import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-error-404',
  imports: [RouterModule],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.css'
})
export class Error404Component {
  constructor(private languageService: LanguageService){

  }

  englishActive():boolean{
    return this.languageService.getLanguage();
  }
}
