import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AlbumListComponent } from '../components/albums/album-list/album-list.component';
import { AlbumDetailsComponent } from '../components/albums/album-details/album-details.component';
import { TagPicturesComponent } from '../components/pictures/tag-pictures/tag-pictures.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumListComponent },
  { path: 'album/:id', component: AlbumDetailsComponent },
  { path: 'tags/:tag', component: TagPicturesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
