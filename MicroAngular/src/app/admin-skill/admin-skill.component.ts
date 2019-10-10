import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Technology } from '../technology';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-admin-skill',
  templateUrl: './admin-skill.component.html',
  styleUrls: ['./admin-skill.component.css'],

})
export class AdminSkillComponent implements OnInit {
  technology:Technology= new Technology();
temp:Technology[]=[];
signinForm: FormGroup;
  constructor(private router: Router, private formBulider: FormBuilder,private adminService:AdminService) { }
  ngOnInit() {

 this.adminService.getTechnology().subscribe( data=>{
   this.temp=data;

 })
    
    this.signinForm = this.formBulider.group(
      {
   technology:[''],
   fee:[''],
   commission:['']
      }

    );
    
  }

 

onSubmit(){
this.technology.techname=this.signinForm.get('technology').value;
this.technology.fee=this.signinForm.get('fee').value;
this.technology.commission=this.signinForm.get('commission').value;
this.adminService.addTechnology(this.technology).subscribe(data => console.log(data), error => console.log(error));
alert("Added Successfully!!!");
this.router.navigateByUrl('/admin-skill');
}

onDelete(id:number){
  this.adminService.deleteTech(id).subscribe(data => console.log(data), error => console.log(error));
  alert("data removed");
}
}
