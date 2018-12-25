import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //inputs:['nome']     ** posso criar um array de inputs
})
export class InputPropertyComponent implements OnInit {

  constructor() { }
  //nome: string = '';
  @Input('nome') nomeCurso: string = '';   //expondo a variavel com nome   -- get/set do c#
  @Input() sobreCurso: string = '';

  ngOnInit() {
  }

}
