import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums: string[] = new Array(27);

  getAlbums() {
    return this.albums.slice();
  }

  constructor() { }
}
