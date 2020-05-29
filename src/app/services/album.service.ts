import { Injectable } from '@angular/core';

import { Album } from '../components/albums/album';
import { Picture } from '../components/pictures/picture';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
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

  getPicturesByTag(tag) {
    this.initAlbums();

    const pictures = this.albums
      .reduce<Picture[]>((acc: Picture[], album:Album) => {
        let allPictures = [...acc, ...album.pictures];
        return allPictures.filter((picture, index) => allPictures.indexOf(picture) === index);
      }, [])
      .filter((picture: Picture) => picture.tags.includes(tag));

    return pictures;
  }

  initAlbums() {
    if (this.albums) {
      return;
    }

    const sources: string[] = [
      'assets/images/-1526382343.jpg',
      'assets/images/1 (1).jpg',
      'assets/images/1.jpg',
      'assets/images/4d6561e0b61b58caa63b48fa15307476.jpg',
      'assets/images/536147.jpg',
      'assets/images/9200000117209519.jpg',
      'assets/images/animal-cute-kitten-cat.jpg',
      'assets/images/baby-panda-ap-ml-180531_sl_3x2_1600.jpg',
      'assets/images/Beata-Miro.jpg',
      'assets/images/c64f0475196dc54f4dd4386ad962beba.jpg',
      'assets/images/Cat-Cat_Guide-An_adult_cat_cleaning_her_kittens_coat.jpg',
      'assets/images/cute-baby-animals-9.jpg',
      'assets/images/cute-baby-animals-1558535060.jpg',
      'assets/images/cute-kitten-416x254-cm-premium-non-woven-130gsm-i77094.jpg',
      'assets/images/Cute-Kitten-Picture-get-your-cat-to-look-at-the-camera.jpg',
      'assets/images/download.jpg',
      'assets/images/GujRFOc.jpg',
      'assets/images/hqdefault.jpg',
      'assets/images/images.jpg',
      'assets/images/istockphoto-1049781144-1024x1024.jpg',
      'assets/images/pet-animal-cute-kitten-baby-cat-mother-145122504.jpg',
      'assets/images/somali-cat-6-week-old-cute-kitten-mouth-open-13483358.jpg.webp',
      'assets/images/unnamed (1).jpg',
      'assets/images/unnamed.jpg',
      'assets/images/Various-Cute-Kitten-Animal-Cartoon-Cat-Wall-Sticker-3D-Vivid-Baby-Kid-Room-Bathroom-Decors-Peel.jpg',
      'assets/images/vermifuger-le-chaton-1-768x512.jpg'
    ];

    const tags: string[] = [
      'Animals',
      'Baby',
      'Cute'
    ];

    const pictures: Picture[] = [];

    for (let i=1; i<=27; i++) {
      let tag = tags[Math.floor(Math.random() * tags.length)];
      pictures.push(new Picture(i, 'Title', sources[i-1], [tag]));
    }
    
    this.albums = [];
    for (let i=1; i<=27; i++) {
      let thumbnail = sources[Math.floor(Math.random() * sources.length)];
      this.albums.push(new Album(i, 'Title', thumbnail, pictures));
    }
  }

  constructor() { }
}