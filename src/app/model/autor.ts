import {Livro} from './livro';

class Autor {
    constructor(public _id: number,
                public _nome: string,
                public _sobrenome: string,
                public _dataNascimento: string) {
        this._id = _id;
        this._nome = _nome;
        this._sobrenome = _sobrenome;
        this._dataNascimento = _dataNascimento;
    }
} export{Autor}
