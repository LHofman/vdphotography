import { Component, OnInit } from '@angular/core';

import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tags = [];
  
  constructor(private tagService: TagService) { }

  ngOnInit() {
    const tags = this.tagService.getTagsForNav();
    this.tags = [
      {
        title: 'Highlighted Tags',
        values: tags.filter((tag) => tag.highlighted).map((tag) => tag.tag).sort()
      },
      {
        title: 'Random Tags',
        values: tags.filter((tag) => !tag.highlighted).map((tag) => tag.tag).sort()
      },
      {},
      { values: ['Show All'] }
    ]
  }

}
