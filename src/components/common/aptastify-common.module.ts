import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SeparationBarComponent } from './separation-bar/separation-bar.component';

@NgModule({
  declarations: [
    HeroComponent,
    SeparationBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    SeparationBarComponent
  ]
})
export class AptastifyCommonModule { }
