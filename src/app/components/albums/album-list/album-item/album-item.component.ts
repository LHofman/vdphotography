import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() album;
  title = 'Title';
  id = 1;
  thumbnail: string = 'assets/images/-1526382343.jpg';

  constructor() { }

  ngOnInit() {
  }

}
