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

  constructor() { }

  getBoardData(board_key): Observable<any> {
    return of(this.data)
      .pipe(delay(1000));
  }
}
