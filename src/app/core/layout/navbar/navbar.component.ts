import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: Array<{links: string, title: string}> =[
    {links: '/productos', title: 'Productos'},
    {links: '/Personajes', title: 'Personajes'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
