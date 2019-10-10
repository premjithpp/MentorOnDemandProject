import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { TrainerSkill } from './trainer-skill';
import { Trainer } from './trainer';
@Injectable({
  providedIn: 'root'
})
export class TrainerServeService {
  private baseUrl ='http://localhost:8045/trainer/trainer-signup'

  constructor(private http: HttpClient) { }

  createTrainer(trainer: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`, trainer);
  }


  getTrainerCred(userName:String): Observable<Trainer>{

    return this.http.get<Trainer>('http://localhost:8045/trainer/trainerName/'+userName );
     
  }

  getTrainerId(id:number): Observable<Trainer>{

    return this.http.get<Trainer>('http://localhost:8045/trainer/trainerId/'+id );
     
  }
 getSkills():Observable<TrainerSkill[]>{
    return this.http.get<TrainerSkill[]>('http://localhost:8045/trainer/skills');
  }

 addSkills(skill: Object):Observable<Object>{
    return this.http.post('http://localhost:8045/trainer/add-skill', skill);
  }



  deleteSkill(id:number): Observable<Object>{

    return this.http.delete('http://localhost:8045/trainer/remove-skill/' + id);
     
  }
}
