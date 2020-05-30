import { Component, OnInit } from '@angular/core';

import { AlbumService } from 'src/app/services/album.service';

import { Album } from '../album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.initAlbums();
  }

  /**
   * Initializes the albums list
   */
  private initAlbums() {
    this.albums = this.albumService.getAlbums();
  }

}
