import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainerServeService } from '../trainer-serve.service';
import { Trainer } from '../trainer';
@Component({
  selector: 'app-trainer-signup',
  templateUrl: './trainer-signup.component.html',
  styleUrls: ['./trainer-signup.component.css']
})
export class TrainerSignupComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBulider: FormBuilder, private TrainerService:TrainerServeService) { }

  trainer:Trainer=new Trainer();
  ngOnInit() {
    this.signinForm = this.formBulider.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        age: ['', Validators.required],
        qualification:['',Validators.required],
        skills:['',Validators.required],
        linkdin:[''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', Validators.required]
      }

    );
  }
  get f() { return this.signinForm.controls; }


  onSubmit() {
    this.submitted = true;
    this.trainer.firstname = this.signinForm.get('firstname').value;
    this.trainer.lastname = this.signinForm.get('lastname').value;
    this.trainer.phone= this.signinForm.get('phone').value;
    this.trainer.linkdin = this.signinForm.get('linkdin').value;
    this.trainer.age = this.signinForm.get('age').value;
    this.trainer.qualification = this.signinForm.get('qualification').value;
    this.trainer.skills = this.signinForm.get('skills').value;
    this.trainer.email = this.signinForm.get('email').value;
    this.trainer.password = this.signinForm.get('password').value;
    this.TrainerService.createTrainer(this.trainer).subscribe(data => console.log(data), error => console.log(error));

    // stop here if form is invalid
    if (this.signinForm.invalid) {
      return;
    }
    else{
      this.router.navigateByUrl('');
    }

  }
}

