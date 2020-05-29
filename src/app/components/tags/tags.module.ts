import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicturesModule } from 'src/app/components/pictures/pictures.module';
import { SharedModule } from 'src/app/components/shared/shared.module';

import { TagPicturesComponent } from './tag-pictures/tag-pictures.component';
import { TagListComponent } from './tag-list/tag-list.component';

@NgModule({
  declarations: [
    TagPicturesComponent,
    TagListComponent
  ],
  imports: [
    CommonModule,
    PicturesModule,
    SharedModule
  ]
})
export class TagsModule { }
