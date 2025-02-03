import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tecnologia } from '../../interfaces/interfaces';
import { DataServiceService } from '../../services/data-service.service';
import { ModalComponent } from './modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tecnologias',
  imports: [CommonModule],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css',
})
export class TecnologiasComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private matDialog: MatDialog
  ) {}

  tecnologias!: Tecnologia[];

  ngOnInit(): void {
    this.getTecnologias();
  }

  abrirModal(logoUrl: string, nombre:string, descripcion: string) {
    const dialogRef = this.matDialog.open(ModalComponent, {
      data: {
        logoUrl: logoUrl,
        nombre: nombre,
        descripcion: descripcion
      },
    });
  }

  getTecnologias(): void {
    this.dataService.getData().subscribe((tecnologias) => {
      this.tecnologias = tecnologias.tecnologias;
    });
  }
}
