import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonUiModule } from '../components/common/common-ui.module';
import { FormsModule } from '../components/forms/forms.module';
import { FeaturesModule } from '../components/features/features.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CommonUiModule,
    FormsModule,
    PagesRoutingModule,
    FeaturesModule
  ]
})
export class PagesModule { }
