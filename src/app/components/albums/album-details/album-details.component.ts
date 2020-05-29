import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AlbumService } from 'src/app/services/album.service';
import { AlertService } from 'src/app/services/alert.service';
import { Album } from '../album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html'
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;
  isLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      setTimeout(() => {
        this.isLoaded = false;

        const album = this.albumService.getAlbum(+params['id']);

        if (!album) {
          this.alertService.flashError(`Album with id ${params['id']} not found`);
          this.router.navigate(['/']);
        }

        this.album = album;
        this.isLoaded = true;
      });
    });
  }

}
