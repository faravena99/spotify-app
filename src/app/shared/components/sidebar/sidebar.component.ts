import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menusRoute: Array<any> = [
    {
      name: 'Home',
      icon: 'uil-estate',
      router: ['/',]
    },
    {
      name: 'Buscar',
      icon: 'uil-search',
      router: ['/', 'favorites']
    },
    {
      name: 'Biblioteca',
      icon: 'uil uil-chart',
      router: ['/', 'history']
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
