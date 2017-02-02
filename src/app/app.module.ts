import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { rotas } from './app.routing';

import { NavbarModule } from './navbar/navbar.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { BibliotecaService } from './service/biblioteca';
import { AutorService } from './service/autor.service';
import { EditoraService } from './service/editora.service';
import { LivroService } from './service/livro.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

import { LoginCanActivate } from './login/login.activate';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NavbarModule,
    DashboardModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    BibliotecaService,
    AutorService,
    EditoraService,
    LivroService,
    LoginCanActivate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
