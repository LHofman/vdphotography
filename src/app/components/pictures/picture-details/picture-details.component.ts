import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { PictureService } from 'src/app/services/picture.service';

import { Picture } from '../picture';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit, OnDestroy {
  picture: Picture;
  private pictureSelectedSubscription: Subscription;

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
    this.subscribeToPictureSelectEvent();
  }

  /**
   * Observes changes to the pictureSelected event
   */
  private subscribeToPictureSelectEvent() {
    this.pictureSelectedSubscription = this.pictureService.pictureSelected.subscribe(
      (picture:Picture) => {
        this.picture = picture;
      }
    );
  }

  ngOnDestroy() {
    this.pictureSelectedSubscription.unsubscribe();
  }

}
