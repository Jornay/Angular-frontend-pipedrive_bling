import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IDeals } from '../interfaces/IDeals';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<IDeals[]>('http://localhost:3001/users').pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      console.error('An error has occurred:', error.error.message);
    } else {
      // Ocorreu um erro no lado do servidor
      console.error(`Error code: ${error.status}, ` + `message: ${error.error}`);
    }
    // Retorne um observable com uma mensagem de erro amigável para o usuário
    return throwError('An error occurred while trying to get the data. Please try again later.');
  }
}
