import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService, isLoggedIn } from '../../shared';

import { SpinnerService } from '../../shared/spinner';
import { ToastyService, ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private spinnerService: SpinnerService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = 'material';
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
    this.accountService.login(this.form.value)
      .subscribe(res => {
        if (res) {
          this.spinnerService.stop();
          this.router.navigate(['']);
        }
      },
      error => {
        this.spinnerService.stop();
        if (error.error.errors) {
          error.error.errors.map(err => this.toastyService.error(err.message));
        } else {
          this.toastyService.error(error.error.message);
        }
      });
  }
}
