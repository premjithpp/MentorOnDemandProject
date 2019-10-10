import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AdminCredentials } from './admin-credentials';
import { Technology } from './technology';
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
}
