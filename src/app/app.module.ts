import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AlbumsModule } from './components/albums/albums.module';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { PicturesModule } from './components/pictures/pictures.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlbumsModule,
    BrowserModule,
    FooterModule,
    NavbarModule,
    PicturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
