import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private dataUrl = './assets/data/';

  constructor(private http: HttpClient) {}

  getData(file: string): Observable<any>{
    return this.http.get(this.dataUrl + file);
  }
}
