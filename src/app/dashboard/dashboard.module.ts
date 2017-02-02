import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './home/dashboard.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent,
    DetalhesComponent,
    CadastroComponent,
    CardComponent
  ],
  exports: [
    DashboardComponent,
    DetalhesComponent,
    CadastroComponent
  ]
})
export class DashboardModule { }
