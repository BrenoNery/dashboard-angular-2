import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../service/livro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  livros;

  constructor(_livroService: LivroService) {
    this.livros = _livroService.consultarTodas();
  }
}
