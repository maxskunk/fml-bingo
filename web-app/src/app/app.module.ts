import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MatGridListModule,
    BrowserAnimationsModule,
    BrowserModule,

  ],
  providers: [BingoBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
