import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../shared';

@Component({
  selector: 'article-detail',
  templateUrl: 'article-detail.components.html',
  styleUrls: ['article-detail.components.scss'],
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
export class ArticleDetailComponent implements OnInit {
  article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.articlesService.show(id)
        .subscribe(res => {
          this.article = res.data;
        },
        error => {
          console.log(error);
        });
    });
  }
}
