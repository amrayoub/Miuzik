import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logged: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navtohome(){
    this.router.navigate(['login'])
  }

}
