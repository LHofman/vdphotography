import { Component, OnInit } from '@angular/core';

import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: string[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

}
