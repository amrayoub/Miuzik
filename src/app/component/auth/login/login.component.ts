import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean = false;
  wrongInfo: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required,Validators.minLength(6)]})
    });
  }

  loginSubmit() {

  }

  invalid(controlName) {
    let control = this.loginForm.get(controlName);
    return control.touched && control.invalid;
  }
}
