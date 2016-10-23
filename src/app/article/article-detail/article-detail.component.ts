import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  commentsList = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.articlesService.show(id)
        .subscribe(res => {
          this.article = res.data;
          this.loadComments(id, 1);
        },
        error => {
          console.log(error);
        });
    });
  }

  loadComments(id: number, page: number) {
    this.articlesService.articleCommentList(id, 1)
      .subscribe(res => {
        this.commentsList = res.data;
      });
  }

  gotoTags(name) {
    this.router.navigate(['/tags/', name]);
  }

}
