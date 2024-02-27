import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Arte } from '../models/Arte';

@Injectable({
  providedIn: 'root'
})
export class ArteService {

  private apiUrl = `${environment.ApiUrl}/Arte`

  constructor( private http: HttpClient) { }

  GetArte() : Observable<Arte[]>{
    return this.http.get<Arte[]>(this.apiUrl);
  }

  CreateArte(arte: Arte) : Observable<Arte[]>{
    return this.http.post<Arte[]>(`${this.apiUrl}`, arte);
  }
}
