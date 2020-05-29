import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AlbumService } from 'src/app/services/album.service';
import { Album } from '../album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html'
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const album = this.albumService.getAlbum(+params['id']);

      if (!album) {
        this.router.navigate(['/albums']);
      }

      this.album = album;
    });
  }

}
