import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplexDFMainComponent } from './complex-dfmain/complex-dfmain.component';


const routes: Routes = [
  { path: 'complex-main', component: ComplexDFMainComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'complex-main' },
  { path: '**', redirectTo: 'complex-main' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplexDataFlowRoutingModule { }
