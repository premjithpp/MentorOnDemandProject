import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../admin.service';
import { Trainee } from '../Trainee';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-admin-usersaccount',
  templateUrl: './admin-usersaccount.component.html',
  styleUrls: ['./admin-usersaccount.component.css']
})
export class AdminUsersaccountComponent implements OnInit {
traineeList:Trainee[]=[];
trainerList:Trainer[]=[];
  constructor(private http:HttpClient,private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getTrainee().subscribe(data => {console.log(data);
      this.traineeList=data;
    }
     
   

    );

    this.adminService.getTrainer().subscribe(data => {console.log(data), error => console.log(error)
      this.trainerList=data;
      
    });
  }
  onTraineeBlock(id:number){
let temp=this.traineeList[id].active;

if(temp=='block'){
  this.traineeList[id].active='unblock';
}
else{
  this.traineeList[id].active='block';
}
console.log(this.traineeList[id]);
this.adminService.updateTraineeAction(this.traineeList[id].id,this.traineeList[id]).subscribe();
}


onTrainerBlock(id:number){
  let temp=this.trainerList[id].active;

if(temp=='block'){
  this.trainerList[id].active='unblock';
}
else{
  this.trainerList[id].active='block';
}
console.log(this.trainerList[id]);
this.adminService.updateTrainerAction(this.trainerList[id].id,this.trainerList[id]).subscribe();

}
}


 


