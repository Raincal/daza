import { Component, OnInit, DoCheck } from '@angular/core';

import { AccountService, isLoggedIn } from '../../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, DoCheck {
  isLoggedIn: Function = isLoggedIn;
  user: Object;

  constructor(
    private accountService: AccountService
  ) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (!this.user && this.isLoggedIn()) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout() {
    this.accountService.logout();
  }

}
