import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SeparationBarComponent } from './separation-bar/separation-bar.component';
import { LogoComponent } from './logo/logo.component';
import { ButtonComponent } from './button/button.component';
import { InstructionCardComponent } from './instruction-card/instruction-card.component';
import { InstructionCardGridComponent } from './instruction-card-grid/instruction-card-grid.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeCardGridComponent } from './recipe-card-grid/recipe-card-grid.component';

@NgModule({
  declarations: [
    HeroComponent,
    SeparationBarComponent,
    LogoComponent,
    ButtonComponent,
    InstructionCardComponent,
    InstructionCardGridComponent,
    RecipeCardComponent,
    RecipeCardGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    SeparationBarComponent,
    LogoComponent,
    ButtonComponent,
    InstructionCardComponent,
    InstructionCardGridComponent,
    RecipeCardComponent,
    RecipeCardGridComponent
  ]
})
export class AptastifyCommonModule { }
