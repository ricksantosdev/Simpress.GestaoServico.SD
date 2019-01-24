import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

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
  ngOnChanges() {
    log('ngOnChanges');
  }

  constructor() {
    log('constructor');
  }

  ngOnInit() {
    log('ngOnInit');
  }

}
