import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSignupComponent } from './email-signup/email-signup.component';
import { CommonUiModule } from '../common/common-ui.module';
import { FormsModule } from '../forms/forms.module';
import { InfoCardGridComponent } from './info-card-grid/info-card-grid.component';
import { NearMeMapComponent } from './near-me-map/near-me-map.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    EmailSignupComponent,
    InfoCardGridComponent,
    NearMeMapComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    CommonUiModule,
    FormsModule
  ],
  exports: [
    EmailSignupComponent,
    InfoCardGridComponent,
    NearMeMapComponent,
    HeroComponent
  ]

})
export class FeaturesModule { }
