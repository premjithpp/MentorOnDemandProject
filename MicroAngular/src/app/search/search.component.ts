import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  result: string[];
  ngOnInit() {

    this.httpService.get('../../assets/json/search.json').subscribe(
      data => {
        this.result = data as string [];	
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
