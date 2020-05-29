import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from 'src/app/services/alert.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tags = [];
  
  constructor(
    private router: Router,
    private alertService: AlertService,
    private tagService: TagService
  ) { }

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

  searchPictures(searchValue: HTMLInputElement) {
    event.preventDefault();

    if (searchValue.value.length < 3) {
      this.alertService.flashInfo('Please enter at least 3 characters to filter pictures');
      return;
    }

    this.router.navigate(['/picture', 'search', searchValue.value]);
  }

}
