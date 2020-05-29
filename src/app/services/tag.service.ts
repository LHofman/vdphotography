import { Injectable } from '@angular/core';

import { shuffle } from '../../utils/array-util';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags: string[] = [
    'Animals',
    'Baby',
    'Cute',
    'Family',
    'Christmas',
    'Nature',
    'macro',
    'Skylight',
    'Hamme',
    'Sundown',
    'Holiday'
  ];

  highlightedTags: string[] = [
    'Animals',
    'Baby',
    'Cute'
  ];

  getAll() {
    return this.tags.sort();
  }

  getTagsForNav() {
    return shuffle(
      this.tags.map((tag) => {
        return {tag, highlighted: this.highlightedTags.includes(tag)};
      })
    ).sort((tag1, tag2) => tag1.highlighted ? -1 : (tag2.highlighted ? 1 : -1))
      .slice(0, 8);
  }

  constructor() { }
}
