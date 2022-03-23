import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  error = false;
  hide = true;
  constructor(private router: Router, private authService: AuthService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.initLoginForm();
   
  }

  initLoginForm() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(3)])
      }
      )
  }

  login() {
    const {email, password} = this.loginForm.value;

    this.authService.send(email, password).subscribe(res =>{
      const { tokenSession, data } = res;
      this.cookie.set('token', tokenSession, 4, '/');
      this.cookie.set('user', email);
      this.router.navigate(['home']);

    }, err => {
        this.error = true
        console.log('---->', err);
    })
  }

}
