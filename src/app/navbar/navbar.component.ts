import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  nome = ' Breno Silva Nery';

  constructor(private _router: Router) {}

  sair() {
    sessionStorage.removeItem('logado');
    this._router.navigate(['/login']);
  }
}
