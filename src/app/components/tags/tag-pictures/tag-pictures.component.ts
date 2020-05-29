import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';
import { Picture } from '../../pictures/picture';

@Component({
  selector: 'app-tag-pictures',
  templateUrl: './tag-pictures.component.html'
})
export class TagPicturesComponent implements OnInit {
  tag: string;
  pictures: Picture[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const pictures = this.albumService.getPicturesByTag(params['tag']);

      if (!pictures.length) {
        this.router.navigate(['/']);
      }

      this.tag = params['tag'];
      this.pictures = pictures;
    });
  }

}
