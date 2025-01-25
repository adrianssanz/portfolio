import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private tecnologiasUrl = './assets/tecnologias.json';
  private empresasUrl = './assets/empresas.json';
  private educacionUrl = './assets/educacion.json';
  private proyectosUrl = './assets/proyectos.json';

  constructor(private http: HttpClient) {}

  getTecnologias(): Observable<any> {
    return this.http.get(this.tecnologiasUrl);
  }

  getEducacion():Observable<any> {
    return this.http.get(this.educacionUrl);
  }

  getProyectos():Observable<any> {
    return this.http.get(this.proyectosUrl);
  }

  getEmpresas(): Observable<any>{
    return this.http.get(this.empresasUrl);
  }
}
