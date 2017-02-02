import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dataAtual = Date.now();

  constructor(private _router: Router) { }

  logar() {
      sessionStorage.setItem('logado', 'true');
      this._router.navigate(['']);
    }
}
