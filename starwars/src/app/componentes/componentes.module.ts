import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakecasePipe } from './../snakecase.pipe';

import { PersonagensComponent } from './personagens/personagens.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { HomeComponent } from './home/home.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { PlanetaComponent } from '../componentes/planeta/planeta.component';


@NgModule({
  declarations: [
    PersonagensComponent,
    HomeComponent,
    PlanetasComponent,
    SnakecasePipe,
    PersonagemComponent,
    PlanetaComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonagensComponent,
    HomeComponent,
    PlanetasComponent,
    PersonagemComponent,
    PlanetaComponent,
  ]
})
export class ComponentesModule { }
