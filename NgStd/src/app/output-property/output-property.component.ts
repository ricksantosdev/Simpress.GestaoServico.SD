import { Component, OnInit, Input, EventEmitter, Output , ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() mudouValor = new EventEmitter();   //passar evento

  @Input() valor: number = 0;

  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa() {
    this.campoValorInput.nativeElement.value++;
   // this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    //this.mudouValor.emit({ novoValor: this.valor });
  }


  /*
  INPUT PERMITE QUE OUTROS TEMPLATES INTERAGEM COM VALORES
  OUPUT LANÇA VALORES DE DENTRO DO TEMPLATE PARA O COMPONENTE CHAMADOR
  EventEmitter  classe que cria eventos customizados



   */

}
