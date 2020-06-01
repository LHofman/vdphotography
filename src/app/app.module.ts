import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './routing/app-routing.module';
import { AdminModule } from './components/admin/admin.module';
import { AlbumsModule } from './components/albums/albums.module';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { SharedModule } from './components/shared/shared.module';
import { TagsModule } from './components/tags/tags.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,

    AdminModule,
    AlbumsModule,
    BrowserModule,
    FooterModule,
    SharedModule,
    NavbarModule,
    TagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
