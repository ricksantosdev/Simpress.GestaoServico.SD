import {
  Component,  OnInit,   OnChanges,   DoCheck,   AfterContentInit,   AfterContentChecked,   AfterViewInit,   AfterViewChecked,   OnDestroy,
  Input
} from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
}) // declarar as interfaces sao boas praticas de programacao
export class CicloComponent implements OnInit,   OnChanges,   DoCheck,   AfterContentInit,   AfterContentChecked,   AfterViewInit,   AfterViewChecked,  OnDestroy {

  // input property
  @Input() valorInicial = 10;

  ngOnDestroy() {
    log('ngOnDestroy');
  }
  ngAfterViewChecked() {
    log('ngAfterViewChecked');
  }
  ngAfterViewInit() {
    log('ngAfterViewInit');
  }
  ngAfterContentChecked() {
    log('ngAfterContentChecked');
  }
  ngAfterContentInit() {
    log('ngAfterContentInit');
  }
  ngDoCheck() {
    log('ngDoCheck');
  }

  // sao disparados nas mudanças com input property
  ngOnChanges() {
    log('ngOnChanges');
  }

  constructor() {
    log('constructor');
  }

  // dentro deste metodo iremos fazer uma chamada ao servidor
  // chamada de servico para trazer dados
  ngOnInit() {
    log('ngOnInit');
  }

}
