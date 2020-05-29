import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { PictureDetailsComponent } from './picture-details/picture-details.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureItemComponent } from './picture-list/picture-item/picture-item.component';
import { SearchPictureComponent } from './search-picture/search-picture.component';

@NgModule({
  declarations: [
    PictureDetailsComponent,
    PictureItemComponent,
    PictureListComponent,
    SearchPictureComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PictureDetailsComponent,
    PictureListComponent
  ]
})
export class PicturesModule { }
