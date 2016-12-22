import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService, isLoggedIn } from '../../shared';

import { SpinnerService } from '../../shared/spinner';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
    private toastr: ToastsManager
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
    this.accountService.login(this.form.value)
      .subscribe(res => {
        if (res) {
          this.spinnerService.stop();
          this.router.navigate(['']);
        }
      },
      error => {
        this.spinnerService.stop();
        if (error.errors) {
          error.errors.map(err => this.toastr.error(err.message));
        } else {
          this.toastr.error(error.message);
        }
      });
  }
}
