import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-admin-trainigreport',
  templateUrl: './admin-trainigreport.component.html',
  styleUrls: ['./admin-trainigreport.component.css']
})
export class AdminTrainigreportComponent implements OnInit {

  constructor(private httpService: HttpClient) {

   }
   result: string[];
  ngOnInit() {
    this.httpService.get('../../assets/json/data.json').subscribe(
      data => {
        this.result = data as string [];	
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
