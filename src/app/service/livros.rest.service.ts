import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
export class LivrosRESTService {

    constructor(private _Http: Http) {}

    consultarTodos() {
        return this._Http.get('http://localhost:3000/livros')
                         .map( res => res.json() );
    }
}
