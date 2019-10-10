import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../must-match.validators';
import { TraineeService } from '../trainee.service';
import { Trainee } from '../Trainee';
@Component({
  selector: 'app-trainee-signup',
  templateUrl: './trainee-signup.component.html',
  styleUrls: ['./trainee-signup.component.css']
})
export class TraineeSignupComponent implements OnInit {
  signinForm: FormGroup;
  
  submitted = false;
  constructor(private router: Router, private formBulider: FormBuilder, private TraineeService:TraineeService) { }
  trainee: Trainee =new Trainee();
  ngOnInit() {

    this.signinForm = this.formBulider.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        age: ['', Validators.required],
        linkdin: [''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', Validators.required]
      }

    );

  }
  
  get f() { return this.signinForm.controls; }


  onSubmit() {
    this.submitted = true;
    this.trainee.firstname = this.signinForm.get('firstname').value;
    this.trainee.lastname = this.signinForm.get('lastname').value;
    this.trainee.phone= this.signinForm.get('phone').value;
    this.trainee.linkdin = this.signinForm.get('linkdin').value;
    this.trainee.age = this.signinForm.get('age').value;
    this.trainee.email = this.signinForm.get('email').value;
    this.trainee.password = this.signinForm.get('password').value;
    this.TraineeService.createTrainee(this.trainee).subscribe(data => console.log(data), error => console.log(error));
    // stop here if form is invalid
    if (this.signinForm.invalid) {
      return;
    }
    else {
      this.router.navigateByUrl('');
    }

  }
}
