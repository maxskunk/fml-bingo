import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Components
import { BingoBoardComponent } from './bingo-board/bingo-board.component';

// Services
import { BingoBoardService } from './services/bingo-board.service'

@NgModule({
  declarations: [
    AppComponent,
    BingoBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BingoBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
