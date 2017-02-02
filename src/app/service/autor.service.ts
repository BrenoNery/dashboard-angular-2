import { Injectable} from '@angular/core';
import { Autor } from '../model/autor';

@Injectable()
export class AutorService {
    autores: Autor[];

    constructor(autores: Autor[]) {
        this.autores = autores;
    }

    incluir(autor: Autor) {
        this.autores.push(autor);
    }

    alterar(target: Autor) {
        this.autores.map(
            (v) => {
                if (v._id === target._id) {
                    v._nome = target._nome;
                    v._sobrenome = target._sobrenome;
                }
            }
        );
    }

    consultarPorID(id: number): Autor {
        return this.autores.find(
            (item) => { return item._id === id; }
        );
    }

    consultarTodas(): Autor[] {
        return this.autores;
    }

    excluir() {
        this.autores.pop();
    }
}
