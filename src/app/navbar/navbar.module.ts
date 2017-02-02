import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { GreetingsPipe } from '../pipes/greetings.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    GreetingsPipe
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
