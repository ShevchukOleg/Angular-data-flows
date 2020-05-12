import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexDataFlowRoutingModule } from './complex-data-flow-routing.module';
import { ComplexDFMainComponent } from './complex-dfmain/complex-dfmain.component';


@NgModule({
  declarations: [ComplexDFMainComponent],
  imports: [
    CommonModule,
    ComplexDataFlowRoutingModule
  ]
})
export class ComplexDataFlowModule { }
