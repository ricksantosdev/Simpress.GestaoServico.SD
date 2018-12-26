import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']

})
export class EventBindingComponent implements OnInit {

  constructor() { }

  botaoClicado() {
    alert('funcionou');
  }
  nome: string = 'abc';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit() {
  }

  pessoa: any = {
    nome: '',
    idade: 20
  }



}
