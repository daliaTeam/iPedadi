import { Component, OnInit } from '@angular/core';
import { NavbarElement, NavbarService } from '../../publicServices/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  elements: NavbarElement[];

  constructor(private navbarService: NavbarService) { 
    this.elements = navbarService.getNavbarElements();
   }

  ngOnInit(): void {
  }

}
