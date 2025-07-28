import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparationBarComponent } from './separation-bar/separation-bar.component';
import { LogoComponent } from './logo/logo.component';
import { ButtonComponent } from './button/button.component';
import { InstructionCardComponent } from './instruction-card/instruction-card.component';
import { InstructionCardGridComponent } from './instruction-card-grid/instruction-card-grid.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeCardGridComponent } from './recipe-card-grid/recipe-card-grid.component';
import { ProductCardGridComponent } from './product-card-grid/product-card-grid.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RichTextComponent } from './rich-text/rich-text.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SeparationBarComponent,
    LogoComponent,
    ButtonComponent,
    InstructionCardComponent,
    InstructionCardGridComponent,
    RecipeCardComponent,
    RecipeCardGridComponent,
    ProductCardGridComponent,
    ProductCardComponent,
    RichTextComponent,
    InfoCardComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SeparationBarComponent,
    LogoComponent,
    ButtonComponent,
    InstructionCardComponent,
    InstructionCardGridComponent,
    RecipeCardComponent,
    RecipeCardGridComponent,
    ProductCardGridComponent,
    ProductCardComponent,
    RichTextComponent,
    InfoCardComponent,
    FooterComponent,
  ]
})
export class CommonUiModule { }
