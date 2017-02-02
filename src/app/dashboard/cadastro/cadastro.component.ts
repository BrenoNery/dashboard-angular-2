import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../service/livro.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Livro } from '../../model/livro';
import { Autor } from '../../model/autor';
import { Editora } from '../../model/editora';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  livros;

  formModel: FormGroup = new FormGroup({
    codigo: new FormControl(),
    titulo: new FormControl(),
    urlImagem: new FormControl()
  });

  constructor(private _livroService: LivroService) {
    this.livros = _livroService.consultarTodas();
  }

  cadastrarLivro() {
    console.log(this.formModel.get('codigo').value);
    console.log(this.formModel.get('titulo').value);
    console.log(this.formModel.get('urlImagem').value);

    const livro: Livro = new Livro(
      this.formModel.get('codigo').value,
      this.formModel.get('titulo').value,
      new Autor(4, 'Stephen', 'King', '21/09/1947'),
      '1950',
      new Editora(1, 'Altas', 'Rua Teste Amorim', null),
      this.formModel.get('urlImagem').value
    );

    console.log(this._livroService);
    this._livroService.incluir(livro);
  }
}
