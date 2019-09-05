import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BingoBoardComponent } from './bingo-board/bingo-board.component';

@NgModule({
  declarations: [
    AppComponent,
    BingoBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
