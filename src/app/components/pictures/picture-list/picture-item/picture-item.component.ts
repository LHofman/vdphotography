import { Component, Input, OnInit } from '@angular/core';

import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.css']
})
export class PictureItemComponent implements OnInit {
  @Input() picture: string;

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
  }

  onClick() {
    this.pictureService.pictureSelected.emit(this.picture);
  }

}
