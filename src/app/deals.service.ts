import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { IDeals } from './interfaces/IDeals';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<IDeals[]>(`http://localhost:3001/users`).toPromise();
  }
}
