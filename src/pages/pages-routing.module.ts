import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class PagesRoutingModule {
  static routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
  ];
}
