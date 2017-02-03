import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginRESTService {

    constructor(private _Http: Http) {}

    logar(usuario, senha): Observable<boolean> {

        return null;
    }
}
