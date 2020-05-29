import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';
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
    private router: Router,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      setTimeout(() => {
        this.isLoaded = false;

        const pictures = this.albumService.getPicturesBySearchValue(params['searchValue']);

        this.searchValue = params['searchValue'];
        this.pictures = pictures;
        this.isLoaded = true;
      });
    });
  }

}
