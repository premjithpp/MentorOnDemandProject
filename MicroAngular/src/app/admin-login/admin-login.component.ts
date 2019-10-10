import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AdminCredentials } from '../admin-credentials';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBulider: FormBuilder,private adminService:AdminService) { }
  admin :AdminCredentials =new AdminCredentials();
  ngOnInit() {
    
    this.signinForm = this.formBulider.group(
      {
        username: ['', Validators.required],
    
        password: ['', Validators.required]
  
      }

    );

  }
  get f() { return this.signinForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signinForm.invalid) {
      return;
    }
    else {
      
      this.adminService.getUserCred(this.signinForm.get('username').value).subscribe(data => {
        this.admin = data;
        if(this.admin ==null){
          alert("Invalid credentials");
        } else if(this.admin.username == this.signinForm.get('username').value && this.admin.password==this.signinForm.get('password').value) {
          this.router.navigateByUrl('/admin-landing');
        }
        else {
          alert("Invalid Credentials");
        }
      })
      
    }

  }

}
