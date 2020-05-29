import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../album';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() album: Album;
  thumbnail: string = 'assets/images/-1526382343.jpg';

  constructor() { }

  ngOnInit() {
  }

}
