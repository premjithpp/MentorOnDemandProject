import { Component, OnInit } from '@angular/core';
import { Training } from '../training';
import { HttpClient } from '@angular/common/http';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-trainer-compleated',
  templateUrl: './trainer-compleated.component.html',
  styleUrls: ['./trainer-compleated.component.css']
})
export class TrainerCompleatedComponent implements OnInit {
id:number;
training:Training[]=[];
  constructor(private http:HttpClient,private trainingService:TrainingService) { }

  ngOnInit() {
    this.id=Number(localStorage.getItem("trainerId"));
    console.log(this.id);
      this.trainingService.getTrainerTraining(this.id).subscribe(data => {
        this.training = data;
      });
  }

}
