import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexDataFlowRoutingModule } from './complex-data-flow-routing.module';
import { ComplexDFMainComponent } from './complex-dfmain/complex-dfmain.component';
import { StyleDirective } from './directives/style.directive';
import { StructyreDirective } from './directives/structyre.directive';


@NgModule({
  declarations: [ComplexDFMainComponent, StyleDirective, StructyreDirective],
  imports: [
    CommonModule,
    ComplexDataFlowRoutingModule
  ]
})
export class ComplexDataFlowModule { }
