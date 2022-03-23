import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  hide = true;
  constructor(private router: Router, private authService: AuthService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.initLoginForm();
   
  }

  initLoginForm() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('escalab@test.com', [Validators.required, Validators.email]),
        password: new FormControl('12345678', [Validators.required, Validators.minLength(3)])
      }
      )
  }

  login() {
    const {email, password} = this.loginForm.value;

    this.authService.send(email, password).subscribe(res =>{
      const { tokenSession, data } = res;
      console.log(res)
      this.cookie.set('token', tokenSession, 4, '/');
      this.cookie.set('user', email);
      this.router.navigate(['home/tracks']);
    
  
    }, err => {
      Swal.fire(
        {
          title: 'Error',
          text: 'Email o password invalida favor intentelo denuevo',
          icon: 'error',
          confirmButtonText: 'Accept'
        })
    })
  }

}
