import { Component, OnInit } from '@angular/core';
import { BingoBoardService } from './../services/bingo-board.service'


@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.scss']
})
export class BingoBoardComponent implements OnInit {

  constructor(private bbserv: BingoBoardService) { }

  ngOnInit() {
    this.bbserv.getBoardData("SomeKey").subscribe((res) => {
      console.log("DATA RECIEVED: " + res);
    }, (err) => {

    })
  }

}
