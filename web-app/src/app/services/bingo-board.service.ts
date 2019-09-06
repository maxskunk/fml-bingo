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
        "label": "Sis: One Sided Convo",
        "selected": true,
      },
      {
        "label": "Lilly Needs a Diet",
        "selected": false,
      },
      {
        "label": "Dad Falls Asleep In Chair",
        "selected": false,
      },
      {
        "label": "Max or Lilly Get 'One Up-ed'",
        "selected": false,
      },
      {
        "label": "Mom Shows Project",
        "selected": false,
      },
      {
        "label": "Mention of FOX News",
        "selected": false,
      },
      {
        "label": "Family Refuses Food Suggestion",
        "selected": false,
      },
      {
        "label": "When are You Getting Married?",
        "selected": false,
      },
      {
        "label": "Dad Randomy chewing on cheek",
        "selected": false,
      },
      {
        "label": "Aggressive Competitiveness",
        "selected": false,
      },
      {
        "label": "Pro-Trump Comments",
        "selected": false,
      },
      {
        "label": "Complain about Max's Driving",
        "selected": false,
      },
      {
        "label": "Dad: 'Where is My Mobile Device?'",
        "selected": false,
      },
      {
        "label": "Family Adds to Our Clutter",
        "selected": false,
      },
      {
        "label": "Making Disgusting Bodily Noises",
        "selected": false,
      },
      {
        "label": "Mom Snaps at Dad",
        "selected": false,
      },
      {
        "label": "When are You Having Kids?",
        "selected": false,
      },
      {
        "label": "Eccentric Hoarder Project",
        "selected": false,
      },
      {
        "label": "Quilt Guild Drama",
        "selected": false,
      },
      {
        "label": "Family Refuses Activity Suggestion",
        "selected": false,
      },
      {
        "label": "Burgers 2 Meals in A Row",
        "selected": false,
      },
      {
        "label": "Dad Asserting How Smart He Is",
        "selected": false,
      },
      {
        "label": "Extremly Exaggerated Story",
        "selected": false,
      },
      {
        "label": "Global Warming is Fake",
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
