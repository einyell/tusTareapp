import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;
  
  constructor(
    private userService : UserService,
    private router : Router,
    ) { 
    this.RegisterForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.RegisterForm.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

}
