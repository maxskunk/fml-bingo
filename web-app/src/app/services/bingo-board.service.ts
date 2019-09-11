import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BingoBoardService {
  private apiURL = 'https://us-central1-zokya-media.cloudfunctions.net/bingo-board-service?board_name=test_board';
  private data = {
    "board_cells": [
      {
        "label": "0",
        "selected": true,
      },
      {
        "label": "1",
        "selected": false,
      },
      {
        "label": "2",
        "selected": false,
      },
      {
        "label": "3",
        "selected": false,
      },
      {
        "label": "4",
        "selected": false,
      },
      {
        "label": "5",
        "selected": false,
      },
      {
        "label": "6",
        "selected": false,
      },
      {
        "label": "7",
        "selected": false,
      },
      {
        "label": "8",
        "selected": false,
      },
      {
        "label": "9",
        "selected": false,
      },
      {
        "label": "10",
        "selected": false,
      },
      {
        "label": "11",
        "selected": false,
      },
      {
        "label": "12",
        "selected": true,
      },
      {
        "label": "13",
        "selected": false,
      },
      {
        "label": "14",
        "selected": false,
      },
      {
        "label": "15",
        "selected": false,
      },
      {
        "label": "16",
        "selected": false,
      },
      {
        "label": "17",
        "selected": false,
      },
      {
        "label": "18",
        "selected": false,
      },
      {
        "label": "19",
        "selected": false,
      },
      {
        "label": "20",
        "selected": false,
      },
      {
        "label": "21",
        "selected": false,
      },
      {
        "label": "22",
        "selected": false,
      },
      {
        "label": "23",
        "selected": false,
      },
    ]
  };

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
