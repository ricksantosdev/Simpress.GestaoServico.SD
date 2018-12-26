import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exaula14Component } from './exaula14.component';

describe('Exaula14Component', () => {
  let component: Exaula14Component;
  let fixture: ComponentFixture<Exaula14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exaula14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exaula14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
