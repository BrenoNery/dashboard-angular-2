import {Livro} from './livro';

class Editora {
    constructor(public _id: number,
                public _nome: string,
                public _endereco: string,
                public _livros: Livro[]) {
        this._id = _id;
        this._nome = _nome;
        this._endereco = _endereco;
        this._livros = _livros;
    }
} export{Editora}
