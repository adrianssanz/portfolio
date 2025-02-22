import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';
import { Proyecto } from '../../interfaces/interfaces';
import { RouterModule } from '@angular/router';
import { ViewChild } from '@angular/core';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-proyectos',
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {
  constructor(private dataService: DataServiceService, private languageService: LanguageService) {}

  proyectos!: Proyecto[];

  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos(): void {
    this.dataService.getData().subscribe((respuesta) => {
      this.proyectos = respuesta.proyectos;
    });
  }

  @ViewChild('dialogo') dialogo: any;

  src!: string;

  abrirDialogo(src: string) {
    this.dialogo.nativeElement.showModal();
    this.src = src;
    document.body.style.overflow = 'hidden';
  }

  cerrarDialogo() {
    this.dialogo.nativeElement.close();
    document.body.style.overflow = 'auto';
  }

  englishActive():boolean{
    return this.languageService.getLanguage();
  }
}
