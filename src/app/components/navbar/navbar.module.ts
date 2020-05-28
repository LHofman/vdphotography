import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/routing/app-routing.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
