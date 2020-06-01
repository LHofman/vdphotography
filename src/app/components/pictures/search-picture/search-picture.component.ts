import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { PictureService } from 'src/app/services/picture.service';

import { Picture } from '../picture';

@Component({
  selector: 'app-search-picture',
  templateUrl: './search-picture.component.html'
})
export class SearchPictureComponent implements OnInit {
  searchValue: string;
  pictures: Picture[];
  isLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private pictureService: PictureService
  ) { }

  ngOnInit() {
    this.subscribeToUrlParams();
  }

  /**
   * Observes changes to the url params
   */
  private subscribeToUrlParams() {
    this.route.params.subscribe((params: Params) => {
      //Execute in a different thread to make sure isLoaded is correctly provided in the structural directive
      setTimeout(() => {
        this.isLoaded = false;

        //Filters pictures based on the searchValue
        const pictures = this.pictureService.getPicturesBySearchValue(params['searchValue']);

        this.searchValue = params['searchValue'];
        this.pictures = pictures;
        this.isLoaded = true;
      });
    });
  }

}
