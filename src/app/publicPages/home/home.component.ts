import { Component, OnInit} from '@angular/core';
import { CarrouselElements, BenefitElements, CardElements } from 'src/app/publicServices/home.service';
import { HomeService } from '../../publicServices/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  
  elements: CarrouselElements[] = [];
  benefit: BenefitElements[] = [];
  bennefit: BenefitElements[] = [];
  alianzas: CardElements[] = [];
  nivelesEducativos: CardElements[] = [];

  constructor( homeService: HomeService) {
    this.elements = homeService.getCarrouselElements();
    this.benefit = homeService.getBeneficiosUno();
    this.bennefit = homeService.getBeneficiosDos();
    this.alianzas = homeService.getAlianzas();
    this.nivelesEducativos = homeService.getNivelesEducativos();
  }


  ngOnInit(): void {
  }

}
