import { EventEmitter, Injectable } from '@angular/core';

import { Picture } from '../components/pictures/picture';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  pictureSelected = new EventEmitter<Picture>();

  constructor() { }
}
