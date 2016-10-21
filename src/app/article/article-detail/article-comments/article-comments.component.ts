import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'article-comments',
  templateUrl: 'article-comments.component.html',
  styleUrls: ['article-comments.component.scss']
})
export class ArticleCommentsComponent implements OnInit {
  @Input() comments;

  constructor() { }

  ngOnInit() {
  }
}
