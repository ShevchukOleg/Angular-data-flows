import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'low', loadChildren: () => import('../app/low-level-flows/low-level-flows.module').then(m => m.LowLevelFlowsModule) },
  { path: 'complex', loadChildren: () => import('./complex-data-flow/complex-data-flow.module').then(m => m.ComplexDataFlowModule) },
  { path: '', redirectTo: 'low', pathMatch: 'full' },
  { path: '**', redirectTo: 'low' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
