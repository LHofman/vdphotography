import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';

import { PictureDetailsComponent } from './picture-details/picture-details.component';
import { PictureEditComponent } from './picture-edit/picture-edit.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureItemComponent } from './picture-list/picture-item/picture-item.component';
import { SearchPictureComponent } from './search-picture/search-picture.component';

@NgModule({
  declarations: [
    PictureDetailsComponent,
    PictureEditComponent,
    PictureItemComponent,
    PictureListComponent,
    SearchPictureComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    PictureDetailsComponent,
    PictureListComponent
  ]
})
export class PicturesModule { }
