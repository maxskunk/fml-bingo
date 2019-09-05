import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { BingoBoardService } from './../services/bingo-board.service';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.scss']
})
export class BingoBoardComponent implements OnInit {

  @HostListener('window:resize', ['$event.target'])
  onResize() {
    this.resizeWorks();
  }

  @ViewChild('container') myBoardContainer: ElementRef;

  constructor(private bbserv: BingoBoardService) { }
  public boardData;
  public cell_height: number;


  ngOnInit() {
    this.bbserv.getBoardData("SomeKey").subscribe((res) => {
      console.log("DATA RECIEVED: " + console.log(res));
      this.boardData = res;
    }, (err) => {

    })
  }

  resizeWorks() {
    console.log("RESIZE: " + this.myBoardContainer.nativeElement.offsetWidth);
    this.cell_height = this.myBoardContainer.nativeElement.offsetWidth / 5;
  }

}
