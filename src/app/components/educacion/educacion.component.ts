import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';
import { Educacion } from '../../interfaces/interfaces';
import { FormatDescripcionPipe } from '../../pipes/format-descripcion.pipe';

@Component({
  selector: 'app-educacion',
  imports: [CommonModule, FormatDescripcionPipe],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent implements OnInit {
  constructor(private dataService: DataServiceService){}
  
  educaciones!: Educacion[];

  ngOnInit(): void {
    this.getEducacion();
  }

  getEducacion(): void {
    this.dataService.getData().subscribe((respuesta) => {
      this.educaciones = respuesta.educacion;
    });
  }

}
