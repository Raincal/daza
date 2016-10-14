import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dz-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})
export class NavComponent implements OnInit {
  showLoginBtn: boolean = true;

  @Input() toolbarColor;
  @Input() loginBtnColor;

  constructor(route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.router.url.match(/account/ig)) {
      this.showLoginBtn = false;
    }
  }
}
