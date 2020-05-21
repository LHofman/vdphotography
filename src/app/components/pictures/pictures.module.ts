import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureDetailsComponent } from './picture-details/picture-details.component';

@NgModule({
  declarations: [
    PictureListComponent,
    PictureDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PictureListComponent,
    PictureDetailsComponent
  ]
})
export class PicturesModule { }
