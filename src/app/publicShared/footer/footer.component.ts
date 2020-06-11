import { Component, OnInit } from '@angular/core';
import { FooterService, Referencias, RedSocial } from '../../publicServices/footer.service';
import { NavbarService, NavbarElement } from '../../publicServices/navbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  paginas: NavbarElement[];
  referencias: Referencias[];
  RedSocial: RedSocial[];
  constructor( private footerService:FooterService, private navbarService: NavbarService) {
    this.paginas = navbarService.getNavbarElements();
    this.referencias = footerService.getReferencia();
    this.RedSocial = footerService.getRedesSociales();
   }

  ngOnInit(): void {
  }

}
