import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { AlbumService } from 'src/app/services/album.service';
import { AlertService } from 'src/app/services/alert.service';

import { Picture } from '../../pictures/picture';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tag-pictures',
  templateUrl: './tag-pictures.component.html'
})
export class TagPicturesComponent implements OnInit {
  tag: string;
  pictures: Picture[];
  isLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private alertService: AlertService
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

        //Finds pictures that have the provided tag attached to it
        const pictures = this.albumService.getPicturesByTag(params['tag']);

        //Redirects if no pictures are found with the provided tag
        if (!pictures.length) {
          this.alertService.flashError(`Tag ${params['tag']} not found`);
          this.router.navigate(['/']);
        }

        this.tag = params['tag'];
        this.pictures = pictures;
        this.isLoaded = true;
      });
    });
  }

}
