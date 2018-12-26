import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exaula14-template',
  templateUrl: './exaula14-template.component.html',
  styleUrls: ['./exaula14-template.component.css']
})
export class Exaula14TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() valor: number = 0;
  @Output() mudaValor = new EventEmitter();


  decrementa() {
    this.valor--;
    this.mudaValor.emit({ novoValor: this.valor });
  }

  incrementa() {
    this.valor++;
    this.mudaValor.emit({ novoValor: this.valor });
  }

}
