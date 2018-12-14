import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  variavelSemTipo: any;
  cursos: string[] ;

  //IOC em angular só acontece por construtor
  constructor(private cursosService: CursosService) {

    this.cursos = this.cursosService.getCursos();

    this.nomePortal = this.cursosService.getNome();

  }

  ngOnInit() {
  }

}
