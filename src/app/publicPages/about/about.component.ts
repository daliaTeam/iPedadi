import { Component, OnInit } from '@angular/core';
import { TeamPedadi, AboutService } from '../../publicServices/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pedadiTeam: TeamPedadi[];

  constructor( private aboutService: AboutService) {
    this.pedadiTeam = aboutService.getTeamPedadi();
   }

  ngOnInit(): void {
  }

}
