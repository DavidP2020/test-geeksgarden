import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router) {

  }

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });


  login() {
    if (this.loginform.valid) {
      this.service.getAll().subscribe(res => {
        const user = res.find((data: any) => {
          return data.username === this.loginform.value.username && data.password === this.loginform.value.password
        });

        if (user) {
          sessionStorage.setItem('username', user.username);
          sessionStorage.setItem('role', user.role);
          this.loginform.reset()
          this.router.navigate(['home'])
          alert("Login Successfull")
        }
        else {
          alert("User Not Found")
        }
      }, error => {
        alert(error)
      })
    }
  }
  ngOnInit(): void {

  }

}
