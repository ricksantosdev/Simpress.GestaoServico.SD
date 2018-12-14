import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoGridComponent } from './curso-grid.component';

describe('CursoGridComponent', () => {
  let component: CursoGridComponent;
  let fixture: ComponentFixture<CursoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
