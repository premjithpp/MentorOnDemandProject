import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AdminCredentials } from './admin-credentials';
import { Technology } from './technology';
import { Trainee } from './Trainee';
import { Trainer } from './trainer';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8045/admin';
  constructor(private http: HttpClient) { }

  getSkillId(id:number): Observable<Technology>{

    return this.http.get<Technology>('http://localhost:8045/admin/admin/'+id );
     
  }
  getUserCred(userName:String): Observable<AdminCredentials>{

    return this.http.get<AdminCredentials>('http://localhost:8045/admin/admin/' +userName );
     
  }

  getTechnology(): Observable<Technology[]>{

    return this.http.get<Technology[]>('http://localhost:8045/admin/admin/technology' );
     
  }

  addTechnology(tech:Object): Observable<Object>{

    return this.http.post('http://localhost:8045/admin/admin/tech',tech);
     
  }
  deleteTech(id:number): Observable<Object>{

    return this.http.delete('http://localhost:8045/admin/admin/technology/' + id);
     
  }

  updateTraineeAction(id:number,trainee:Trainee):Observable<Object>{
    return this.http.put('http://localhost:8045/trainee/update-action/' + id,trainee);
  }

  updateTrainerAction(id:number,trainer:Trainer):Observable<Object>{
    return this.http.put('http://localhost:8045/trainer/update-action/' + id,trainer);
  }

  getTrainer(): Observable<Trainer[]>{

    return this.http.get<Trainer[]>('http://localhost:8045/trainer/trainers' );
     
  }

  getTrainee(): Observable<Trainee[]>{

    return this.http.get<Trainee[]>('http://localhost:8045/trainee/trainees' );
     
  }

}
