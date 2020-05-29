import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../routing/app-routing.module';
import { AlertComponent } from './alert/alert.component';
import { TagItemComponent } from '../tags/tag-list/tag-item/tag-item.component';

@NgModule({
  declarations: [
    AlertComponent,
    TagItemComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    AlertComponent,
    TagItemComponent
  ]
})
export class SharedModule { }
