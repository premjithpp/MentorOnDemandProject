import { Component, OnInit } from '@angular/core';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { TrainerServeService } from '../trainer-serve.service';
import { TraineeService } from '../trainee.service';
import { AdminCredentials } from '../admin-credentials';
import { AdminService } from '../admin.service';
import { Trainee } from '../Trainee';
import { Trainer } from '../trainer';
import { Technology } from '../technology';

@Component({
  selector: 'app-trainer-current',
  templateUrl: './trainer-current.component.html',
  styleUrls: ['./trainer-current.component.css']
})
export class TrainerCurrentComponent implements OnInit {
training: Training[]=[];
trainee:Trainee=new Trainee();
technology:Technology=new Technology();
trainer:Trainer=new Trainer();
id:number;

  constructor(private trainingService:TrainingService,private trainerService:TrainerServeService,private traineeService:TraineeService,private adminService:AdminService) { }

  ngOnInit() {
  this.id=Number(localStorage.getItem("trainerId"));
  console.log(this.id);
    this.trainingService.getTrainerTraining(this.id).subscribe(data => {
      this.training = data;

  

    })


  }
onResume(){
  alert("course Resumed");
}



}
