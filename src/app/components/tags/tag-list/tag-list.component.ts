import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['/tag-list.component.css']
})
export class TagListComponent implements OnInit {
  tags: string[];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.initTags();
  }

  /**
   * Initializes the tags list
   */
  private initTags() {
    this.tags = this.tagService.getAll();
  }

}
