import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../../service/biblioteca';
import { LivroService } from '../../service/livro.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  livros;
  titulo = 'Dashboard';

  constructor(lService: LivroService) {
    this.livros = lService.consultarTodas();
  }

  receberTitulo(tituloIn) {
    alert('O titulo recebido é: ' + tituloIn);
    this.titulo = tituloIn;
  }
/*
  livro;
  searchInput: FormControl = new FormControl('');

  constructor(private _bService: BibliotecaService) {
    this.livro = _bService.consultarLivro();
    this.searchInput.valueChanges
        .debounceTime(500)
        .subscribe(data => { this.exibirDados(data); });
  }

  exibirDados(data) {
    console.log('[RxJS] valor digitado :' + data);
  }
*/
}
