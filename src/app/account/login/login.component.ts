import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService, isLoggedIn } from '../../services/user.service';
import { Router } from '@angular/router';

import { SpinnerService } from '../../shared/spinner';

@Component({
  selector: 'dz-login',
  providers: [UserService],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private spinnerService: SpinnerService
  ) {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  ngOnInit() {
    if (isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  onSubmit() {
    this.spinnerService.start();
    this.userService.login(this.form.value)
      .subscribe(res => {
        if (res) {
          this.spinnerService.stop();
          this.router.navigate(['']);
        }
      });
  }
}
