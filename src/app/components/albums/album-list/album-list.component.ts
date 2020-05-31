import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumService } from 'src/app/services/album.service';

import { Album } from '../album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];
  isAdmin: boolean;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    const url = this.route['_routerState'].snapshot.url;
    this.isAdmin = url.includes('admin');
    
    this.initAlbums();
  }

  /**
   * Initializes the albums list
   */
  private initAlbums() {
    this.albums = this.albumService.getAlbums();
  }

}
