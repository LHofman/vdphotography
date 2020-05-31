import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Album } from '../../album';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() album: Album;
  @Input() isAdmin: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    let navigation = null;
    if (this.isAdmin) {
      navigation = ['/admin', 'albums', this.album.id, 'edit'];
    } else {
      navigation = ['/album', this.album.id];
    }

    this.router.navigate(navigation);
  }

}