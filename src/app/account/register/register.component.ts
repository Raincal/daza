import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService, isLoggedIn } from '../../shared';
import { SpinnerService } from '../../shared/spinner';
import { ToastyService, ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

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
      username: '',
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    if (isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  onSubmit() {
    this.accountService.register(this.form.value)
      .subscribe(res => {
        if (res) {
          this.spinnerService.stop();
          this.router.navigate(['']);
        }
      },
      error => {
        this.spinnerService.stop();
        if (error.errors) {
          error.errors.map(err => this.toastyService.error(err.message));
        } else {
          this.toastyService.error(error.message);
        }
      });
  }
}
