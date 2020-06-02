import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlertService } from 'src/app/services/alert.service';
import { PictureService } from 'src/app/services/picture.service';

import { Picture } from '../picture';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {
  @Input() title: string;
  @Input() pictures: Picture[];
  isAdmin: boolean;

  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService,
    private pictureService: PictureService
  ) { }

  ngOnInit() {
    const url = this.route['_routerState'].snapshot.url;
    this.isAdmin = url.includes('admin');
  }

  searchPictures(searchValue: HTMLInputElement) {
    //Don't search for pictures if the searchValue is too small
    if (searchValue.value.length < 3) {
      this.alertService.flashInfo('Please enter at least 3 characters to filter pictures');
      return;
    }

    this.pictures = this.pictureService.getPicturesBySearchValue(searchValue.value);
  }

}
