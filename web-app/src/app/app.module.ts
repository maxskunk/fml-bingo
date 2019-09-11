import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Components
import { BingoBoardComponent } from './bingo-board/bingo-board.component';

// Services
import { BingoBoardService } from './services/bingo-board.service';
import { BingoCellComponent } from './bingo-cell/bingo-cell.component';

//Angular Material
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    BingoBoardComponent,
    BingoCellComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    MatGridListModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

  ],
  providers: [BingoBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
