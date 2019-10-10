import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-admin-paymentreport',
  templateUrl: './admin-paymentreport.component.html',
  styleUrls: ['./admin-paymentreport.component.css']
})
export class AdminPaymentreportComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  result: string[];
  ngOnInit() {
  
  this.httpService.get('../../assets/json/paymentreport.json').subscribe(
    data => {
      this.result = data as string [];	
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );
}
}