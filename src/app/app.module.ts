import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './routing/app-routing.module';
import { AlbumsModule } from './components/albums/albums.module';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { TagsModule } from './components/tags/tags.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlbumsModule,
    AppRoutingModule,
    BrowserModule,
    FooterModule,
    NavbarModule,
    TagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
