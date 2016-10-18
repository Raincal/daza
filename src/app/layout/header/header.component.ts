import { Component, OnInit } from '@angular/core';
import { isLoggedIn, UserService } from '../../services/user.service';

@Component({
  selector: 'dz-header',
  providers: [UserService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isLoggedIn: Function = isLoggedIn;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }

}
