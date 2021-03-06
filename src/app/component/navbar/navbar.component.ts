import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logged: boolean = true;
  showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

}
