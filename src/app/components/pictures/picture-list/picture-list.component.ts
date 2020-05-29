import { Component, OnInit } from '@angular/core';

import { AlbumService } from 'src/app/services/album.service';

import { Album } from '../../albums/album';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {
  album: Album;

  constructor(private albumservice: AlbumService) { }

  ngOnInit() {
    this.album = this.albumservice.selectedAlbum;
    this.albumservice.albumSelected.subscribe((album:Album) => {
      this.album = album;
    });
  }

}
