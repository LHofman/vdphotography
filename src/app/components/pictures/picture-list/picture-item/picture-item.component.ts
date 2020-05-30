import { Component, Input, OnInit } from '@angular/core';

import { PictureService } from 'src/app/services/picture.service';

import { Picture } from '../../picture';

@Component({
  selector: 'app-picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.css']
})
export class PictureItemComponent implements OnInit {
  @Input() picture: Picture;

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
  }

  /**
   * Emits the pictureSelected event with the current picture
   */
  onClick() {
    this.pictureService.pictureSelected.emit(this.picture);
  }

}
