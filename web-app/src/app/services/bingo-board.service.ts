import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BingoBoardService {
  private data = {
    "board_cells": [
      {
        "label": "Lilly's Sis: Endless One Sided Convo About Vauge Subject",
        "selected": true,
      },
      {
        "label": "Diet",
        "selected": false,
      }
    ]
  };

  constructor() { }

  getBoardData(board_key): Observable<any> {
    return of(this.data)
      .pipe(delay(1000));
  }
}
