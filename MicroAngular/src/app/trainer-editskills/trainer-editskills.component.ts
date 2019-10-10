import { Component, OnInit } from '@angular/core';
import { Technology } from '../technology';
import { AdminService } from '../admin.service';
import { TrainerSkill } from '../trainer-skill';
import { TrainerServeService } from '../trainer-serve.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trainer-editskills',
  templateUrl: './trainer-editskills.component.html',
  styleUrls: ['./trainer-editskills.component.css']
})
export class TrainerEditskillsComponent implements OnInit {
  technology: Technology = new Technology();
  skillName : string;
  trainerskill: TrainerSkill= new TrainerSkill();
  i : number;
  temp: Technology[] = [];
  skill: TrainerSkill[] = [];
  skillForm: FormGroup;
  constructor(private adminService: AdminService, private router:Router,private formBulider: FormBuilder, private trainerService: TrainerServeService) { }

  ngOnInit() {
    this.adminService.getTechnology().subscribe(data => {
      this.temp = data;
    })
    this.trainerService.getSkills().subscribe(data => {
      this.skill = data;

    })


    this.skillForm = this.formBulider.group(
      {
        skill: ['']
      }
  
    );
  }

 
  
onAdd(){
  this.i = this.skillForm.get('skill').value;

  this.trainerskill.skill=this.temp[this.i].techname;
 this.trainerskill.trainerId=Number(localStorage.getItem("trainerId"));
 this.trainerskill.skillId=  this.temp[this.i].id;
  this.trainerService.addSkills(this.trainerskill).subscribe(data => console.log(data), error => console.log(error));
  alert("Added Successfully!!!");
  this.ngOnInit();


}

}
