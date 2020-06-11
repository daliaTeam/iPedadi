import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

 private refer: Referencias[] = [
{
  icono: 'fas fa-map-marked-alt',
  descripcion: 'Corpus Cristi 606, Universidad, El Arenal, Agencia de Policia de Cinco Señores, 68126 Oaxaca de Juárez, Oax'
},
{
  icono: 'fas fa-phone',
  descripcion: '951 277 0113'
},
{
  icono: 'fas fa-phone',
  descripcion: '951 277 0113'
},
{
  icono: 'fas fa-envelope',
  descripcion: 'intituto_pedadi@outlook.es'
}
  ];

  private redSocial: RedSocial[] = [
    {
      icono: 'fab fa-facebook fa-2x',
      link: 'https://www.facebook.com'
    },
    {
      icono: 'fab fa-twitter fa-2x',
      link: 'https://www.twitter.com'
    },
    {
      icono: 'fab fa-instagram fa-2x',
      link: 'https://www.instagram.com'
    },
    {
      icono: 'fab fa-youtube fa-2x',
      link: 'https://www.youtube.com'
    },
  ];

  constructor() {}
  getReferencia(): Referencias[] {
    return this.refer;
  }
  getRedesSociales(): RedSocial[] {
    return this.redSocial;
  }
}
export interface Referencias {
  icono: string;
  descripcion: string;
}
export interface RedSocial {
  icono: string;
  link: string;
}
