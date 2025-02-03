import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';
import { Proyecto } from '../../interfaces/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-proyectos',
  imports: [CommonModule, FooterComponent, RouterModule],
  templateUrl: './layout-proyectos.component.html',
  styleUrl: './layout-proyectos.component.css',
})
export class LayoutProyectosComponent implements OnInit {
  constructor(
    private dataService: DataServiceService
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

  @ViewChild('dialogo') dialogo: any;
  
    src!: string;
  
    abrirDialogo(src: string) {
      this.dialogo.nativeElement.showModal();
      this.src = src;
    }
  
    cerrarDialogo() {
      this.dialogo.nativeElement.close();
    }
}
