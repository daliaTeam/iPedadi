import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarElement, NavbarService } from '../../publicServices/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

/* ----------------- Control del cambio de color del navbar ----------------- */
  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event){
    this.colorNav = window.pageYOffset > 590 ? true : false
  }  
    
  elements: NavbarElement[];
  colorNav=false;
  
  constructor(private navbarService: NavbarService) { 
    this.elements = navbarService.getNavbarElements();
  }
  
  ngOnInit(): void {
  }
  

}
