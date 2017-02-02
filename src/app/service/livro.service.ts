import { Injectable} from '@angular/core';
import { Livro } from '../model/livro';
import { Autor } from '../model/autor';
import { Editora } from '../model/editora';
import { livrosAltas } from '../db/db.base';

@Injectable()
export class LivroService {
    livros: Livro[];

    constructor() {
        this.livros = livrosAltas;
    }

    incluir(livro: Livro) {
        this.livros.push(livro);
    }

    alterar(livro: Livro) {
        const res = this.livros.find(
            ( el: Livro ) => {
              return livro._titulo == el._titulo;
            }
         );
         res._titulo = livro._titulo;
    }

    consultarPorID(id: number): Livro {
        return this.livros.find(
            (item) => { return item._id == id; }
        );
    }

    consultarAutorLivro(idLivro: number): Autor {
        const livro = this.consultarPorID(idLivro);
        return livro._autor;
    }

    consultarEditoraLivro(idLivro: number): Editora {
        const livro = this.consultarPorID(idLivro);
        return livro._editora;
    }

    consultarTodas(): Livro[] {
        return this.livros;
    }

    excluir() {
        this.livros.pop();
    }
}
