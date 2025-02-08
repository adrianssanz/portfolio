import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANG_KEY = 'language';

  constructor() { }

  setLanguage(isEnglish: boolean): void{
    localStorage.setItem(this.LANG_KEY, JSON.stringify(isEnglish));
  }

  getLanguage(): boolean{
    const lang = localStorage.getItem(this.LANG_KEY);
    return lang ? JSON.parse(lang): false;
  }

  toggleLanguage(): void{
    const currentLang = this.getLanguage();
    this.setLanguage(!currentLang);
  }
}
