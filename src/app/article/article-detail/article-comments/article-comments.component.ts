import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ArticlesService } from '../../../shared';
import { ToastyService, ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'article-comments',
  templateUrl: './article-comments.component.html',
  styleUrls: ['./article-comments.component.scss']
})
export class ArticleCommentsComponent implements OnInit {
  @Input() comments;
  @Input() id;
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private articlesService: ArticlesService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = 'material';
    this.form = this.fb.group({
      content: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(e) {
    if (e != null && !((e.metaKey || e.ctrlKey) && e.keyCode === 13)) {
      return;
    }
    this.articlesService
      .articleComment(this.id, this.form.value)
      .subscribe(res => {
        this.form.reset();
        const user = JSON.parse(localStorage.getItem('user'));
        res.data.user = user;
        this.comments.push(res.data);
      },
      error => {
        this.toastyService.error(error.message);
      });
  }

}
