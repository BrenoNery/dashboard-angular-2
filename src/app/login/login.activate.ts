import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginCanActivate implements CanActivate {

    constructor(private _router: Router) { }

    canActivate() {
        const logado = sessionStorage.getItem('logado');

        if (logado) {
            return true;
        } else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
