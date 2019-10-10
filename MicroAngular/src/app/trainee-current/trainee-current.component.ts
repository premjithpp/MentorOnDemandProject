import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainingService } from '../training.service';
import { Training } from '../training';

@Component({
  selector: 'app-trainee-current',
  templateUrl: './trainee-current.component.html',
  styleUrls: ['./trainee-current.component.css']
})
export class TraineeCurrentComponent implements OnInit {
id:number;
training:Training[]=[];
  constructor(private http:HttpClient,private trainingService:TrainingService) { }

  ngOnInit() {
    this.id=Number(localStorage.getItem("traineeId"));
    console.log(this.id);
      this.trainingService.getTrainerTraining(this.id).subscribe(data => {
        this.training = data;
      });
  }

}
