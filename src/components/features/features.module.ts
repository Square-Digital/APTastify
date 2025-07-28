import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSignupComponent } from './email-signup/email-signup.component';
import { CommonUiModule } from '../common/common-ui.module';
import { FormsModule } from '../forms/forms.module';
import { InfoCardGridComponent } from './info-card-grid/info-card-grid.component';
import { NearMeMapComponent } from './near-me-map/near-me-map.component';



@NgModule({
  declarations: [
    EmailSignupComponent,
    InfoCardGridComponent,
    NearMeMapComponent,
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
  ]

})
export class FeaturesModule { }
