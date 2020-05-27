import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {
  @Input() picture: string;
  title = 'Title';
  tags: string[] = [];

  constructor() { }

  ngOnInit() {
    const tags = [
      'Animals',
      'Baby',
      'Cute',
    ];

    this.tags = tags.sort();
  }

}
