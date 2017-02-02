import { Injectable} from '@angular/core';

@Injectable()
export class BibliotecaService {
    consultarLivro() {
        return {
            id: 1,
            nome: 'Harry Potter'
        };
    }
}
