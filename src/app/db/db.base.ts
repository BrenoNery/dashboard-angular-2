import { Autor } from '../model/autor';
import { Editora } from '../model/editora';
import { Livro } from '../model/livro';

export const autores: Autor[] = [
    new Autor(1, 'Carlos', 'Drummond', '31/10/1902'),
    new Autor(2, 'Mário', 'Quintana', '30/07/1906'),
    new Autor(3, 'Monteiro', 'Lobato', '18/04/1882'),
    new Autor(4, 'Stephen', 'King', '21/09/1947'),
    new Autor(5, 'J. R. R.', 'Tolkien', '03/01/1892')
];

export const livrosAltas: Livro[] = [
    new Livro(1, 'A Rosa do Povo',
        new Autor(1, 'Carlos', 'Drummond', '31/10/1902'), '1945',
            new Editora(1, 'Altas', 'Rua Teste Amorim', null),
        'http://livroseresumos.com.br/wp-content/uploads/2014/05/a-rosa-do-povo.jpg'
    ),
    new Livro(2, 'O Senhor dos Anéis - A Sociedade do Anel',
        new Autor(5, 'J. R. R.', 'Tolkien', '03/01/1892'), '1954',
            new Editora(1, 'Altas', 'Rua Teste Amorim', null),
        // tslint:disable-next-line:max-line-length
        'http://4.bp.blogspot.com/-BcaUYSO-ILU/US5Lxm1vocI/AAAAAAAAHBo/iDYYRnDHt0A/s1600/livro-o-senhor-dos-aneis-trilogia_MLB-F-217772296_5429.jpg'
    ),
    new Livro(3, 'O Iluminado',
        new Autor(4, 'Stephen', 'King', '21/09/1947'), '1977',
            new Editora(1, 'Altas', 'Rua Teste Amorim', null),
        'http://www.objetiva.com.br/arquivos/capas/9788581050485_300_grafica.jpg'
    ),
    new Livro(4, 'A Dança da Morte',
        new Autor(4, 'Stephen', 'King', '21/09/1947'), '1954',
            new Editora(1, 'Altas', 'Rua Teste Amorim', null),
        'http://bookeando.com/site/wp-content/uploads/2014/05/stephen-king-a-dança-da-morte.jpg'
    )
];

export const editoras: Editora[] = [
    new Editora(1, 'Atlas', 'Rua Teste Amorim', livrosAltas)
];
