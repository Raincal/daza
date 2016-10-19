import { Component, OnInit } from '@angular/core';

import { Tag } from './tag';
import { TagsService } from '../../shared';

@Component({
  selector: 'dz-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.scss']
})
export class TagComponent implements OnInit {
  tags: Tag[];
  pagination;

  constructor(private tagsService: TagsService) {
  }

  ngOnInit() {
    this.tagsService.lists(1)
      .subscribe(data => {
        this.tags = data.data;
        this.pagination = data.pagination;
      },
      error => console.log(error));
  }
}
