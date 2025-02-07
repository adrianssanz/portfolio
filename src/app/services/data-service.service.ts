import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private dataUrl = './assets/data/data.json';
  private dataUrlEn = './assets/data/dataEn.json';

  constructor(private http: HttpClient, private languageService: LanguageService) {}

  getData(): Observable<any>{
    if (this.languageService.getLanguage()){
      return this.http.get(this.dataUrlEn);
    }
    return this.http.get(this.dataUrl);
  }
}
