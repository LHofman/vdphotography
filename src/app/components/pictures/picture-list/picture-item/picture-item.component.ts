import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PictureService } from 'src/app/services/picture.service';

import { Picture } from '../../picture';

@Component({
  selector: 'app-picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.css']
})
export class PictureItemComponent implements OnInit {
  @Input() picture: Picture;
  @Input() isAdmin: boolean;

  constructor(private router: Router, private pictureService: PictureService) { }

  ngOnInit() {
  }

  /**
   * Emits the pictureSelected event with the current picture
   */
  onClick() {
    if (this.isAdmin) {
      this.router.navigate(['/admin', 'pictures', this.picture.id, 'edit']);
    } else {
      this.pictureService.pictureSelected.next(this.picture);
    }
  }

}
