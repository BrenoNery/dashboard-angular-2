import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dataAtual = Date.now();

  constructor(private _router: Router, private _lService: LoginService) { }

  tratarFormulario(value) {
    const isLogado = this._lService.logar(value.loginname, value.password);

    if (isLogado) {
      this._router.navigate(['/main/home']);
      return true;
    }
  }
}
