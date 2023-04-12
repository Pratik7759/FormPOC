import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FormPOC';
  signupForm: any = FormGroup;

  constructor(private fb: FormBuilder) {}

  employeeDetailsForm = this.fb.group({
    firstName: [
      '',
      Validators.required,
      Validators.pattern('^[a-zA-Z][a-zA-Z ]+'),
      Validators.minLength(3),
    ],
    lastName: [
      '',
      Validators.required,
      Validators.pattern('^[a-zA-Z][a-zA-Z ]+'),
      Validators.minLength(3),
    ],
    email: ['', Validators.required, Validators.email],
    password: [
      '',
      Validators.required,
      Validators.pattern(
        '(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ],
    confirmpassword: [
      '',
      Validators.required,
      Validators.pattern(
        '(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ],
  });

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstname: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z ]+'),
        Validators.minLength(3),
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z ]+'),
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
      confirmpassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    const status =
      this.signupForm.password === this.signupForm.confirmpassword
        ? 'equal'
        : 'not equal';
    console.log(status);
  }
}
