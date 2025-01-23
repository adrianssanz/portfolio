import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SobreMiComponent } from '../../components/sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from '../../components/tecnologias/tecnologias.component';
import { ExperienciaComponent } from '../../components/experiencia/experiencia.component';
import { EducacionComponent } from '../../components/educacion/educacion.component';

@Component({
  selector: 'app-estructura',
  imports: [
    HeaderComponent,
    SobreMiComponent,
    TecnologiasComponent,
    ExperienciaComponent,
    EducacionComponent,
  ],
  templateUrl: './estructura.component.html',
  styleUrl: './estructura.component.css',
})
export class EstructuraComponent {}
