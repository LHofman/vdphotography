import { Injectable, EventEmitter } from '@angular/core';

import { Album } from '../components/albums/album';
import { Picture } from '../components/pictures/picture';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumSelected = new EventEmitter<Album>();
  selectedAlbum: Album;
  albums: Album[];

  getAlbums() {
    this.initAlbums();
    
    return this.albums.slice();
  }

  getAlbum(id) {
    this.initAlbums();

    const album = this.albums.filter((album) => album.id === id);

    return album ? album[0] : null;
  }

  selectAlbum(album:Album) {
    this.selectedAlbum = album;
    this.albumSelected.emit(album);
  }

  initAlbums() {
    if (this.albums) {
      return;
    }

    const pictures: Picture[] = [
      new Picture('Title', 'assets/images/-1526382343.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/1 (1).jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/1.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/4d6561e0b61b58caa63b48fa15307476.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/536147.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/9200000117209519.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/animal-cute-kitten-cat.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/baby-panda-ap-ml-180531_sl_3x2_1600.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/Beata-Miro.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/c64f0475196dc54f4dd4386ad962beba.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/Cat-Cat_Guide-An_adult_cat_cleaning_her_kittens_coat.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/cute-baby-animals-9.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/cute-baby-animals-1558535060.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/cute-kitten-416x254-cm-premium-non-woven-130gsm-i77094.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/Cute-Kitten-Picture-get-your-cat-to-look-at-the-camera.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/download.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/GujRFOc.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/hqdefault.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/images.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/istockphoto-1049781144-1024x1024.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/pet-animal-cute-kitten-baby-cat-mother-145122504.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/somali-cat-6-week-old-cute-kitten-mouth-open-13483358.jpg.webp', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/unnamed (1).jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/unnamed.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/Various-Cute-Kitten-Animal-Cartoon-Cat-Wall-Sticker-3D-Vivid-Baby-Kid-Room-Bathroom-Decors-Peel.jpg', ['Animals', 'Baby', 'Cute']),
      new Picture('Title', 'assets/images/vermifuger-le-chaton-1-768x512.jpg', ['Animals', 'Baby', 'Cute'])
    ];
    
    this.albums = [];
    for (let i=1; i<=27; i++) {
      this.albums.push(new Album(i, 'Title', pictures));
    }
  }

  constructor() { }
}
