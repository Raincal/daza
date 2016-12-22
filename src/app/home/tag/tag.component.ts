import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { Tag } from './tag';
import { TagsService } from '../../shared';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  animations: [
    fadeIn
  ]
})
export class TagComponent implements OnInit {
  tags: Tag[];
  pagination;

  constructor(
    private tagsService: TagsService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.tagsService.lists(1)
      .subscribe(data => {
        this.tags = data.data;
        this.pagination = data.pagination;
      },
      error => console.error(error));
  }

  gotoTags(name) {
    this.router.navigate(['/tags', name]);
  }
}
