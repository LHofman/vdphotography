import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumDetailsComponent } from './album-details/album-details.component';
import { PicturesModule } from '../pictures/pictures.module';

@NgModule({
  declarations: [
    AlbumDetailsComponent
  ],
  imports: [
    CommonModule,
    PicturesModule
  ],
  exports: [
    AlbumDetailsComponent
  ]
})
export class AlbumsModule { }
