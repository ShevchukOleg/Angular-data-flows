import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { LowLevelRoutingModule } from './low-level-flows-routing.module';

@NgModule({
  declarations: [MainPageComponent, PostComponent, PostFormComponent],
  imports: [
    CommonModule,
    LowLevelRoutingModule
  ]
})
export class LowLevelFlowsModule { }
