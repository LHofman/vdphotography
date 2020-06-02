import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanDeactivateGuard } from './guards/can-deactivate-guard.service';

import { AdminComponent } from '../components/admin/admin/admin.component';
import { AlbumDetailsComponent } from '../components/albums/album-details/album-details.component';
import { AlbumEditComponent } from '../components/albums/album-edit/album-edit.component';
import { AlbumListComponent } from '../components/albums/album-list/album-list.component';
import { PictureEditComponent } from '../components/pictures/picture-edit/picture-edit.component';
import { PictureListComponent } from '../components/pictures/picture-list/picture-list.component';
import { SearchPictureComponent } from '../components/pictures/search-picture/search-picture.component';
import { TagPicturesComponent } from '../components/tags/tag-pictures/tag-pictures.component';
import { TagListComponent } from '../components/tags/tag-list/tag-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'albums/edit', component: AlbumListComponent },
    { path: 'albums/:id/edit', component: AlbumEditComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'pictures/edit', component: PictureListComponent },
    { path: 'pictures/:id/edit', component: PictureEditComponent }
  ] },
  { path: 'albums', component: AlbumListComponent },
  { path: 'album/:id', component: AlbumDetailsComponent },
  { path: 'picture/search/:searchValue', component: SearchPictureComponent },
  { path: 'tags', component: TagListComponent },
  { path: 'tags/:tag', component: TagPicturesComponent },
  { path: '**', redirectTo: '/albums' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule { }
