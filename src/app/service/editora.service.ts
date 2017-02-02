import { Injectable} from '@angular/core';
import { Editora } from '../model/editora';

@Injectable()
export class EditoraService {
    editoras: Editora[];

    constructor(editoras: Editora[]) {
        this.editoras = editoras;
    }

    incluir(editora: Editora) {
        this.editoras.push(editora);
    }

    alterar(editora: Editora) {
        const res = this.editoras.find(
            ( el: Editora ) => {
              return editora._nome === el._nome;
            }
         );
         res._nome = editora._nome;
    }

    consultarPorID(id: number): Editora {
        return this.editoras.find(
            (item) => { return item._id === id; }
        );
    }

    consultarTodas(): Editora[] {
        return this.editoras;
    }

    excluir() {
        this.editoras.pop();
    }
}
