import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainerServeService } from '../trainer-serve.service';
import { Training } from '../training';
import { AdminService } from '../admin.service';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-search-trainers',
  templateUrl: './search-trainers.component.html',
  styleUrls: ['./search-trainers.component.css']
})
export class SearchTrainersComponent implements OnInit {
training:Trainer[]=[];
  constructor(private http:HttpClient,private adminService:AdminService) { }

  ngOnInit() {
    
  }
  onClick(){
    this.adminService.getTrainer().subscribe(data => {
      this.training = data;
      console.log(this.training);
      
    });
  }
  onPropose(){
    alert("Training Proposed");
  }

}
