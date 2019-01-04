//prepara a aplicação para ser servida em um browser
import { BrowserModule } from '@angular/platform-browser';
//modulo principal
import { NgModule } from '@angular/core';
//modulo para trabalhar com formularios
//Two Way Data Binding
import { FormsModule } from '@angular/forms';
//objeto para trabalhar com Requisições HTTP
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { Exaula14Component } from './exaula14/exaula14.component';
import { Exaula14TemplateComponent } from './exaula14/exaula14-template/exaula14-template.component';
import { ClockComponent } from './clock/clock.component';
import { Clock2Component } from './clock2/clock2.component';
import { CicloComponent } from './ciclo/ciclo.component';
@NgModule({
  //referenciamos componentes , diretivas e Pipes
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBindingComponent,
    EventBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    Exaula14Component,
    Exaula14TemplateComponent,
    ClockComponent,
    Clock2Component,
    CicloComponent,


  ],
  //informamos os modulos que usamos na aplicação
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CursosModule

  ],
  //informamos os serviços que serão utlizados | declarado aqui é de scopo global para aplicação
  providers: [],
  //esta instrução só é encontrada no componente raiz e indica qual
  //componente será instaciada quando app for iniciada
  bootstrap: [AppComponent]
})
export class AppModule { }
