import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm : FormGroup;

  constructor( 
    private userService : UserService,
    private router : Router,
     ) { 
     this.LoginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.LoginForm.value)
    .then(response =>{
      console.log(response);
      this.router.navigate(['/main']);
    })
    .catch(error => console.log(error));
  }

  onClick(){
    this.userService.loginWithGoogle()
    .then(response => {
      console.log(response);
      this.router.navigate(['/main']);
    })
    .catch(error => console.log(error));
  }
}
