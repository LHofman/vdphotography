import { Component, OnInit, Input } from '@angular/core';

import { Picture } from '../picture';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {
  @Input() title: string;
  @Input() pictures: Picture[];

  constructor() { }

  ngOnInit() {
  }

}
