import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { Router } from '@angular/router';

import { Tag } from './tag';
import { TagsService } from '../../shared';

@Component({
  selector: 'dz-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave', [
        animate(0, style({ opacity: 1 }))
      ])
    ])
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
      error => console.log(error));
  }

  gotoTags(name) {
    this.router.navigate(['/tags', name]);
  }
}
