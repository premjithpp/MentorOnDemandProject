import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Training } from './training';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }

  addTraining(training:Object):Observable<Object>{
    return this.http.post('http://localhost:8045/training/add-course',training );
  }

  getTraining():Observable<Training[]>{
    return this.http.get<Training[]>('http://localhost:8045/training/coursedetails' );
  }

  getUserTraining(userId:number):Observable<Training[]>{
    return this.http.get<Training[]>('http://localhost:8045/training/user/'+userId );
  }

  getTrainerTraining(trainerId:number):Observable<Training[]>{
    return this.http.get<Training[]>('http://localhost:8045/training/course/mentor/'+trainerId );
  }
}
