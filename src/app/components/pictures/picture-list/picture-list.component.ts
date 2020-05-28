import { Component, OnInit } from '@angular/core';

import { PictureService } from '../../../services/picture.service';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {
  title = 'Title';
  pictures: string[] = [];

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
    this.pictures = this.pictureService.getPictures();
  }

}
