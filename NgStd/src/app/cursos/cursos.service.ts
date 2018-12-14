import { Injectable } from '@angular/core';

//esta classe pode ser injetada em outra classe
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['C#', 'Asp.Net MVC 5', 'Asp.Net Core', 'JavaScript Vanilla', 'Angular'];
  }


  getNome() {
    return ' fddasjkfhdjas ';
  }
}
