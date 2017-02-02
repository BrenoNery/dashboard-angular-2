import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  id: number;

  @Input()
  urlImagem: string;

  @Input()
  titulo: string;

  @Input()
  subTitulo: string;

  @Output()
  tituloOut: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _router: Router) { }

  detalhes() {
    this._router.navigate(['/main/detalhes']);
  }

  enviarTitulo() {
    alert('Este é o titulo : ' + this.titulo);
    this.tituloOut.emit(this.titulo);
  }
}
