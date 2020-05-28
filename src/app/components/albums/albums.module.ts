import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumItemComponent } from './album-list/album-item/album-item.component';
import { PicturesModule } from '../pictures/pictures.module';
import { AppRoutingModule } from 'src/app/routing/app-routing.module';

@NgModule({
  declarations: [
    AlbumDetailsComponent,
    AlbumListComponent,
    AlbumItemComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    PicturesModule
  ],
  exports: [
    AlbumListComponent,
    AlbumDetailsComponent
  ]
})
export class AlbumsModule { }
