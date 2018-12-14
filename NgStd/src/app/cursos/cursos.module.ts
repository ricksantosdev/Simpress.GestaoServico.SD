import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoGridComponent } from './curso-grid/curso-grid.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent, CursoGridComponent],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  //providers -- provedores
  providers: [CursosService]
})
export class CursosModule { }
