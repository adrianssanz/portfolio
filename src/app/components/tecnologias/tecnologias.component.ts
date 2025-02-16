import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tecnologia } from '../../interfaces/interfaces';
import { DataServiceService } from '../../services/data-service.service';
import { ModalComponent } from './modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-tecnologias',
  imports: [CommonModule],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css',
})
export class TecnologiasComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private matDialog: MatDialog,
    private languageService: LanguageService
  ) {}

  tecnologias!: Tecnologia[];

  ngOnInit(): void {
    this.getTecnologias();
  }

  abrirModal(tecnologia: Tecnologia) {
    const dialogRef = this.matDialog.open(ModalComponent, {
      data: {
        tecnologia: tecnologia
      },
    });
  }

  getTecnologias(): void {
    this.dataService.getData().subscribe((tecnologias) => {
      this.tecnologias = tecnologias.tecnologias;
    });
  }

  englishActive(): boolean {
    return this.languageService.getLanguage();
  }
}
