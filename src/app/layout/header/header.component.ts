import { Component, OnInit } from '@angular/core';

import { AccountService, isLoggedIn } from '../../shared';

@Component({
  selector: 'dz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isLoggedIn: Function = isLoggedIn;

  constructor(
    private accountService: AccountService
  ) {}

  ngOnInit() {
  }

  logout() {
    this.accountService.logout();
  }

}
