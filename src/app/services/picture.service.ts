import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Picture } from '../components/pictures/picture';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  pictureSelected = new Subject<Picture>();

  constructor() { }
}
