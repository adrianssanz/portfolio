import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';
import { LanguageService } from '../../services/language.service';
import { Proyecto } from '../../interfaces/interfaces';
import { Route, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-proyectos',
  imports: [CommonModule, FooterComponent, RouterModule],
  templateUrl: './layout-proyectos.component.html',
  styleUrl: './layout-proyectos.component.css',
})
export class LayoutProyectosComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private languageService: LanguageService,
    private router: Router
  ) {}

  proyectos!: Proyecto[];

  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos(): void {
    this.dataService.getData().subscribe((respuesta) => {
      this.proyectos = respuesta.proyectos;
    });
  }

  goToHome(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/']);
  }

  englishActive():boolean{
    return this.languageService.getLanguage();
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
}
