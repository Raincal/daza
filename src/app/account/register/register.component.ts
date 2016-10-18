import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService, isLoggedIn } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dz-register',
  providers: [UserService],
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private userService: UserService
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
    this.userService.register(this.form.value)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['']);
        }
      });
  }
}
