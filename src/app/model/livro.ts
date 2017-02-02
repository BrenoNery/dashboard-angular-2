import {Editora} from './editora';
import {Autor} from './autor';

class Livro {
    constructor(public _id: number,
                public _titulo: string,
                public _autor: Autor,
                public _dataLancamento: string,
                public _editora: Editora,
                public _urlImagem: string) {
        this._id = _id;
        this._titulo = _titulo;
        this._autor = _autor;
        this._dataLancamento = _dataLancamento;
        this._editora = _editora;
        this._urlImagem = _urlImagem;
    }
} export{Livro}
