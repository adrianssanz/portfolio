import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private tecnologiasUrl = './assets/tecnologias.json';
  private empresasUrl = './assets/empresas.json';

  constructor(private http: HttpClient) {}

  getTecnologias(): Observable<any> {
    return this.http.get(this.tecnologiasUrl);
  }

  getEmpresas(): Observable<any>{
    return this.http.get(this.empresasUrl);
  }
}
