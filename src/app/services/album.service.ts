import { Injectable } from '@angular/core';

import { removeFromListById, updateInListById } from 'src/utils/array-util';

import { AlertService } from './alert.service';
import { PictureService } from './picture.service';

import { Album } from '../components/albums/album';
import { Picture } from '../components/pictures/picture';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums: Album[];

  constructor(private alertService: AlertService, private pictureService: PictureService) { }

  /**
   * Returns a list of all albums
   */
  getAlbums(): Album[] {
    this.initAlbums();
    
    return this.albums.slice();
  }

  /**
   * Finds an album by id
   */
  getAlbum(id: number): Album | null {
    this.initAlbums();

    const album = this.albums.filter((album) => album.id === id);

    return album ? album[0] : null;
  }

  /**
   * Updates an album
   */
  update(id: number, album: Album) {
    return updateInListById(this.albums, id, album, 'Album not found', this.alertService);
  }

  deleteAlbum(id: number): boolean {
    return removeFromListById(this.albums, id, 'Album not found', this.alertService);
  }

  /**
   * Finds a list of albums filtered on the title
   */
  getAlbumsBySearchValue(searchValue: string): Album[] {
    this.initAlbums();

    return this.albums.filter((album: Album) =>
      album.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

  /**
   * Temporary method to initialize a list of albums with hardcoded data
   */
  private initAlbums() {
    if (this.albums) {
      return;
    }

    const titles: string[] = [
      'Title',
      'Animals',
      'Baby Animals',
      'Cute Baby Animals'
    ];

    const pictures: Picture[] = this.pictureService.getAllPictures();

    this.albums = [];
    let thumbnail = 'assets/images/-1526382343.jpg';
    for (let i=1; i<=27; i++) {
      let title = titles[Math.floor(Math.random() * titles.length)];
      this.albums.push(new Album(i, title, thumbnail, pictures));
    }
  }

}
