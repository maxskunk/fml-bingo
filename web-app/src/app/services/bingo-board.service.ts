import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BingoBoardService {
  private apiURL = 'https://us-central1-zokya-media.cloudfunctions.net/bingo-board-service';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch employee
  getBoardData(board_key): Observable<any> {
    let params = new HttpParams();
    params = params.append('board_name', board_key);
    return this.http.get<any>(this.apiURL, { params: params }).pipe(
      tap( // Log the result or error
        data => {
          return data.data;
        },
        error => {
          return error;
        }
      )
    )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  // getBoardData(board_key): Observable<any> {
  //   return of(this.data)
  //     .pipe(delay(1000));
  // }
}
