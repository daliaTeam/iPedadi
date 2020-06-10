import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private equipoPedadi: TeamPedadi[] = [
    {
      imagen: '',
      nombre: 'L.C.E. Karina Salinas Sánchez',
      puesto: 'Directora General',
      descripcion: ''
    },
    {
      imagen: '',
      nombre: 'L.C.E. Higinio Salinas Sanchéz',
      puesto: 'Director Nivel Primaria',
      descripcion: ''
    },
    {
      imagen: '',
      nombre: 'C.P. Jassive Maty Cruz Olayo',
      puesto: 'Jefa de Depto. Servicios Escolares',
      descripcion: ''
    },
    {
      imagen: '',
      nombre: 'L.C.E. Lucía Cruz Reyes',
      puesto: 'Docente',
      descripcion: ''
    },
    {
      imagen: '',
      nombre: 'L.C.E. Shenny Viridiana Pérez Robles',
      puesto: 'Docente',
      descripcion: ''
    },
    {
      imagen: '',
      nombre: 'L.C.E. Roxana Mariela Reyes Villalobos',
      puesto: 'Docente',
      descripcion: ''
    },
    {
      imagen: '',
      nombre: 'L.C.E. Edith Vásquez Ramírez',
      puesto: 'Docente',
      descripcion: ''
    },
    {
      imagen: '',
      nombre: 'L.E.I. Víctor E. Delgado Morales ',
      puesto: 'Docente de Inglés',
      descripcion: ''
    },
    {
      imagen: '',
      nombre: 'L.S.C. Liliana Soledad Santiago López',
      puesto: 'Docente de Computación',
      descripcion: ''
    }

  ];

  constructor() {}
  getTeamPedadi(): TeamPedadi[] {
    return this.equipoPedadi;
  }

}

export interface TeamPedadi {
  imagen: string;
  nombre: string;
  puesto: string;
  descripcion: string;

}
