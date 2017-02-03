import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './home/dashboard.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { WebsocketComponent } from './websocket/websocket.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    DetalhesComponent,
    CadastroComponent,
    CardComponent,
    WebsocketComponent
  ],
  exports: [
    DashboardComponent,
    DetalhesComponent,
    CadastroComponent,
    WebsocketComponent
  ]
})
export class DashboardModule { }
