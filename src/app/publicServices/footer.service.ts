import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

 private refer: Referencias[] = [
{
  icono: 'fa fa-map-marker',
  descripcion: 'Corpus Cristi 606, Universidad, El Arenal, Agencia de Policia de Cinco Señores, 68126 Oaxaca de Juárez, Oax'
},
{
  icono: 'fa fa-phone',
  descripcion: '951 277 0113'
},
{
  icono: 'fa fa-phone',
  descripcion: '951 277 0113'
},
{
  icono: 'fa fa-envelope',
  descripcion: 'instituto_pedadi@outlook.es'
}
  ];

  private redSocial: RedSocial[] = [
    {
      icono: 'fa fa-facebook-f',
      link: 'https://www.facebook.com',
      animacion: 'social-button facebook mr-2'
      
    },
    {
      icono: 'fa fa-twitter',
      link: 'https://www.twitter.com',
      animacion: 'social-button twitter mr-2'
    },
    {
      icono: 'fa fa-linkedin',
      link: 'https://www.linkedin.com/',
      animacion: 'social-button linkedin mr-2'
    },
    {
      icono: 'fa fa-youtube',
      link: 'https://www.instagram.com',
      animacion: 'social-button youtube mr-2'
    },
    {
      icono: 'fa fa-instagram',
      link: 'https://www.youtube.com',
      animacion: 'social-button instagram mr-2'
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
  animacion: string;
}
