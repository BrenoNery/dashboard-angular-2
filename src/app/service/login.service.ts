import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    logar( usuario, senha ): boolean {
        const loginValido = 'breno.nery@teste.com';
        const senhaValida = '123456';

        if (usuario == loginValido && senha == senhaValida) {
            sessionStorage.setItem('logado', 'true');
            return true;
        } else {
            sessionStorage.setItem('logado', 'false');
            return false;
        }
    }
}
