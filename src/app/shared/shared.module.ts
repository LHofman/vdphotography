import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../routing/app-routing.module';
import { TagItemComponent } from '../components/tags/tag-list/tag-item/tag-item.component';

@NgModule({
  declarations: [
    TagItemComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    TagItemComponent
  ]
})
export class SharedModule { }
