import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'www.uol.com.br';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/output/technics-q-c-507-256-2.jpg';
  getValor() {
    return 1;
  }


  curtirCurso() {
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}
