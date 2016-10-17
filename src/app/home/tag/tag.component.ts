import { Component, OnInit } from '@angular/core';

import { Tag } from './tag';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'dz-tag',
  providers: [TagService],
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.scss']
})
export class TagComponent implements OnInit {
  tags: Tag[];
  pagination;

  constructor(private tagService: TagService) {
    this.tagService.getTags()
      .subscribe(data => {
        this.tags = data.data;
        this.pagination = data.pagination;
      },
      error => console.log(error));
  }

  ngOnInit() {

  }
}
