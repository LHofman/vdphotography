import { Component, OnInit } from '@angular/core';

import { PictureService } from 'src/app/services/picture.service';

import { Picture } from '../picture';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {
  picture: Picture;

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
    this.subscribeToPictureSelectEvent();
  }

  /**
   * Observes changes to the pictureSelected event
   */
  private subscribeToPictureSelectEvent() {
    this.pictureService.pictureSelected.subscribe((picture:Picture) => {
      this.picture = picture;
    });
  }

}
