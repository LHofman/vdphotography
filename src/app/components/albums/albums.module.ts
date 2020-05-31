import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/routing/app-routing.module';
import { PicturesModule } from '../pictures/pictures.module';

import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { AlbumItemComponent } from './album-list/album-item/album-item.component';
import { AlbumListComponent } from './album-list/album-list.component';

@NgModule({
  declarations: [
    AlbumDetailsComponent,
    AlbumEditComponent,
    AlbumItemComponent,
    AlbumListComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    PicturesModule
  ],
  exports: [
    AlbumListComponent,
    AlbumDetailsComponent
  ]
})
export class AlbumsModule { }
