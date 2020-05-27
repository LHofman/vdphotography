import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.css']
})
export class PictureItemComponent implements OnInit {
  @Output() handleClickPicture = new EventEmitter<string>();
  @Input() picture: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.handleClickPicture.emit(this.picture);
  }

}
