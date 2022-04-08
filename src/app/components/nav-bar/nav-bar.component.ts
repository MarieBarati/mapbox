import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private dataService:  DataService) { }

  ngOnInit(): void {
  }

  setLayer(name: string): void {
    this.dataService.setLayer(name);
  }

}
