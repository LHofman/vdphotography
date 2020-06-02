import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { updateInListById, removeFromListById } from 'src/utils/array-util';

import { AlertService } from './alert.service';

import { Picture } from '../components/pictures/picture';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  pictureSelected = new Subject<Picture>();
  pictures: Picture[];

  constructor(private alertService: AlertService) { }

  getAllPictures(): Picture[] {
    this.initPictures();

    return this.pictures.slice();
  }

  /**
   * Finds an album by id
   */
  getPicture(id: number): Picture | null {
    this.initPictures();

    const picture = this.pictures.filter((picture) => picture.id === id);

    return picture ? picture[0] : null;
  }

  /**
   * Finds a list of pictures with the provided tag attached to it
   */
  getPicturesByTag(tag: string): Picture[] {
    this.initPictures();

    return this.pictures.filter((picture: Picture) => picture.tags.includes(tag));
  }

  /**
   * Finds a list of pictures filtered on the title
   */
  getPicturesBySearchValue(searchValue: string): Picture[] {
    this.initPictures();

    return this.pictures.filter((picture: Picture) =>
      picture.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

  /**
   * Updates a Picture
   */
  update(id: number, picture: Picture) {
    return updateInListById(this.pictures, id, picture, 'Picture not found', this.alertService);
  }

  deletePicture(id: number): boolean {
    return removeFromListById(this.pictures, id, 'Picture not found', this.alertService);
  }

  private initPictures() {
    if (this.pictures) {
      return;
    }

    const titles: string[] = [
      'Title 1',
      'Cute Animal',
      'Baby Animal',
      'Cute Baby Animal'
    ];

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

    this.pictures = [];
    for (let i=1; i<=sources.length; i++) {
      let tag = tags[Math.floor(Math.random() * tags.length)];
      let title = titles[Math.floor(Math.random() * titles.length)];
      this.pictures.push(new Picture(i, title, sources[i-1], [tag]));
    }
    
  }
}
