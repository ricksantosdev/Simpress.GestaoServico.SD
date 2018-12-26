import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exaula14TemplateComponent } from './exaula14-template.component';

describe('Exaula14TemplateComponent', () => {
  let component: Exaula14TemplateComponent;
  let fixture: ComponentFixture<Exaula14TemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exaula14TemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exaula14TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
