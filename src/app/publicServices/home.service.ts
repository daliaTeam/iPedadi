import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private carrElements: CarrouselElements[] = [
    {
      titulo: 'Instituto Pedadi',
      subtitulo: 'Sub 1',
      link: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/carrusel4.jpg?alt=media&token=1f05db62-ecb6-4061-9347-c6052828dff1',
      clase: 'carousel-item active',
    },
    {
      titulo: 'Titulo 2',
      subtitulo: 'Sub 2',
      link: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/carrusel2.jpg?alt=media&token=712dc8ff-bb71-497f-b2f7-4ddae01e6eeb',
      clase: 'carousel-item',
      
    },
    {
      titulo: 'Titulo 3',
      subtitulo: 'Sub 3',
      link: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/carrusel3.jpg?alt=media&token=7c8d377b-29fe-48c7-b80a-609200d5afce',
      clase: 'carousel-item',
    },
    {
      titulo: 'Titulo 4',
      subtitulo: 'Sub 4',
      clase: 'carousel-item',
      link: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/carrusel1.jpg?alt=media&token=c724a71f-8509-4825-9578-9c2c305bfd02',
    },
  ];
  private beneficiosone: BenefitElements[] = [
    {
      beneficio: 'Formacion Emprendedora',
      icono: 'fa fa-fort-awesome fa-2x'
    },

    {
      beneficio: 'Alianza con Bussines Kid',
      icono: 'fa fa-rocket fa-2x'
    },

    {
      beneficio: 'Talleres deportivos',
      icono: 'fa fa-life-ring fa-2x'
    },
  ];
  private beneficiostwo: BenefitElements[] = [
    {
      beneficio: 'Alianza con Instituciones',
      icono: 'fa fa-university fa-2x'
      //icono: 'ti ti-basketball ti-2x'
    },
    {
      beneficio: 'Enseñanza del Ingles',
      icono: 'fa fa-language fa-2x'
    },
    {
      beneficio: 'Clases de computacion',
      icono: 'fa fa-laptop fa-2x'
    },
  ];
  private alianzas: CardElements[] = [
    {
      imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/alianza1.png?alt=media&token=e2345507-3e95-4a27-b2d4-68f634998bfb',
      titulo: 'UTVCO',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eligendi consequatur tempo',
      link: 'http://utvco.edu.mx/'
    },
    {
      imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/alianza2.png?alt=media&token=a4ccd1cb-0fb6-4db3-9d59-4d95fe409cea',
      titulo: 'IODEMC',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eligendi consequatur tempo',
      link: 'https://www.oaxaca.gob.mx/iodemc/'
    },
    {
      imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/alianza3.png?alt=media&token=d7b8c1be-0c6b-429a-83e2-97ea561e7ef4',
      titulo: 'BUSINESSKIDS',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eligendi consequatur tempo',
      link: 'http://www.businesskids.com.mx/'
    },
  ];

 private nivelesEducativos: CardElements[] = [
    {
      imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/alianza1.png?alt=media&token=e2345507-3e95-4a27-b2d4-68f634998bfb',
      titulo: 'UTVCO',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eligendi consequatur tempo',
      link: 'http://utvco.edu.mx/'
    },
    {
      imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/alianza2.png?alt=media&token=a4ccd1cb-0fb6-4db3-9d59-4d95fe409cea',
      titulo: 'IODEMC',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eligendi consequatur tempo',
      link: 'https://www.oaxaca.gob.mx/iodemc/'
    },
    {
      imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/alianza3.png?alt=media&token=d7b8c1be-0c6b-429a-83e2-97ea561e7ef4',
      titulo: 'BUSINESSKIDS',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eligendi consequatur tempo',
      link: 'http://www.businesskids.com.mx/'
    },
  ];

  constructor() { }
  getCarrouselElements(): CarrouselElements[] {
    return this.carrElements;
  }
  getBeneficiosUno(): BenefitElements[] {
    return this.beneficiosone;
  }
  getBeneficiosDos(): BenefitElements[] {
    return this.beneficiostwo;
  }
  getAlianzas(): CardElements[] {
    return this.alianzas;
  }
  getNivelesEducativos(): CardElements[] {
    return this.nivelesEducativos;
  }

}

export interface CarrouselElements {
  titulo: string;
  subtitulo: string;
  link: string;
  clase: string;
}
export interface BenefitElements {
  beneficio: string;
  icono: string;
}
export interface CardElements {
  imagen: string;
  titulo: string;
  descripcion: string;
  link: string;
}
