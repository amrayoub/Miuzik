import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  registerForm: FormGroup;
  wrongInfo: boolean = false;
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3), Validators.maxLength(255)]}),
      email: new FormControl(null, { validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(6)]}),
      password_confirmation: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  registerSubmit() {
    
  }


  invalid(controlName){
    let control = this.registerForm.get(controlName);
    return control.touched && control.invalid;
  }

  hasError(controlName, errorName){
    let control = this.registerForm.get(controlName);
    if(control.errors && control.errors[errorName] && this.invalid(controlName) ){
      return true;
    }
    return false;
  }


  passwordsNotMatch(){
    return this.registerForm.value.password !== this.registerForm.value.password_confirmation;
  }


}
