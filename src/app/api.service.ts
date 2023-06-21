import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/users'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    console.log(this.http.get<any>(this.apiUrl))
    return this.http.get<any>(this.apiUrl);
  }
}
