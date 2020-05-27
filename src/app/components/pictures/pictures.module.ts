import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PictureDetailsComponent } from './picture-details/picture-details.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureItemComponent } from './picture-list/picture-item/picture-item.component';

@NgModule({
  declarations: [
    PictureDetailsComponent,
    PictureItemComponent,
    PictureListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PictureDetailsComponent,
    PictureListComponent
  ]
})
export class PicturesModule { }
