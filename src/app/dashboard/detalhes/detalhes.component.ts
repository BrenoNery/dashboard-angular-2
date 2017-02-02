import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from '../../service/livro.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {

  id: number;
  urlImagem: string;
  titulo: string;

  constructor(aRoute: ActivatedRoute, lService: LivroService) {
    const livro = lService.consultarPorID(aRoute.snapshot.params['id']);

    this.id = livro._id;
    this.urlImagem = livro._urlImagem;
    this.titulo = livro._titulo;
  }
}
