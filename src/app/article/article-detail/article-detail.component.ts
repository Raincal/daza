import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../../shared';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.components.html',
  styleUrls: ['./article-detail.components.scss'],
  animations: [
    fadeIn
  ]
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  private sub;

  article: Object;
  commentsList: Array<Object> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id'];
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadComments(id: number, page: number) {
    this.articlesService.articleCommentList(id, 1)
      .subscribe(res => {
        this.commentsList = res.data;
      },
      error => {
        console.log(error);
      });
  }

  gotoTags(name: string) {
    this.router.navigate(['/tags/', name]);
  }

}
