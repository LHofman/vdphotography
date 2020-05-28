import { Component, OnInit } from '@angular/core';

import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {
  picture: string;
  title = 'Title';
  tags: string[] = [];

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
    this.pictureService.pictureSelected.subscribe((picture:string) => {
      this.picture = picture;
    });

    const tags = [
      'Animals',
      'Baby',
      'Cute',
    ];

    this.tags = tags.sort();
  }

}
