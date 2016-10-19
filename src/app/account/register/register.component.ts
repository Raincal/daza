import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService, isLoggedIn } from '../../shared';

@Component({
  selector: 'dz-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private accountService: AccountService
  ) {
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
          this.router.navigate(['']);
        }
      });
  }
}
