import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';
import { Empresa } from '../../interfaces/interfaces';
import { FormatDescripcionPipe } from '../../pipes/format-descripcion.pipe';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experiencia',
  imports: [CommonModule, FormatDescripcionPipe],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css',
})
export class ExperienciaComponent implements OnInit {
  constructor(private dataService: DataServiceService, private languageService: LanguageService) {}

  empresas!: Empresa[];

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(): void {
    this.dataService.getData().subscribe((respuesta) => {
      this.empresas = respuesta.empresas;
    });
  }

  englishActive():boolean{
    return this.languageService.getLanguage();
  }
}
