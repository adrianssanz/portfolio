import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private dataUrlEs = 'https://gist.githubusercontent.com/adrianssanz/87319ce5325d3486f32ac8e4e0eff4cb/raw';
  private dataUrlEn = 'https://gist.githubusercontent.com/adrianssanz/cc45a685e56f05aa5ecf44f5ceaffe39/raw';

  private dataEsJson = './assets/data/data.json';
  private dataEnJson = './assets/data/dataEn.json';

  getData(): Observable<any> {
    if (this.languageService.getLanguage()) {
      return this.http.get(this.dataUrlEn).pipe(
        catchError(() => {
          // Si hay un error o no devuelve nada, se usa el archivo local en inglés
          return this.http.get(this.dataEnJson);
        })
      );
    } else {
      return this.http.get(this.dataUrlEs).pipe(
        catchError(() => {
          // Si hay un error o no devuelve nada, se usa el archivo local en español
          return this.http.get(this.dataEsJson);
        })
      );
    }
  }

  constructor(private http: HttpClient, private languageService: LanguageService) {}

}
