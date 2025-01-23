import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tecnologia } from '../../interfaces/interfaces';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-tecnologias',
  imports: [CommonModule],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent implements OnInit{

  constructor(private dataService: DataServiceService){

  }

  tecnologias!: Tecnologia[];

  ngOnInit(): void {
    this.getTecnologias();
  }

  getTecnologias(): void{
    this.dataService.getTecnologias().subscribe((tecnologias) => {
      this.tecnologias = tecnologias.tecnologias;
      console.log(tecnologias.tecnologias)
      console.log(this.tecnologias)
    });
  }

}
