import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { TrainingService } from '../training.service';
import { Training } from '../training';

@Component({
  selector: 'app-trainee-compleated',
  templateUrl: './trainee-compleated.component.html',
  styleUrls: ['./trainee-compleated.component.css']
})
export class TraineeCompleatedComponent implements OnInit {
id:number;
training:Training[]=[];
  constructor(private httpService: HttpClient,private trainingService:TrainingService) { }
  result: string[];
  ngOnInit() {
    this.id=Number(localStorage.getItem("traineeId"));
    console.log(this.id);
      this.trainingService.getTrainerTraining(this.id).subscribe(data => {
        this.training = data;
        console.log(this.training);
      });
  }
 
}
