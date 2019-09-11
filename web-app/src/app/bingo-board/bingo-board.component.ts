import { Component, OnInit, HostListener, ViewChild, ElementRef, Input } from '@angular/core';
import { BingoBoardService } from './../services/bingo-board.service';




@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.scss']
})
export class BingoBoardComponent implements OnInit {


  @ViewChild('container') myBoardContainer: ElementRef;

  constructor(private bbserv: BingoBoardService) { }
  public boardData = [];
  public cell_height: number;
  public layoutOrder = [];

  private _start_seed: number;
  private seed: number;
  private seed_dirty: boolean = false;

  @Input()
  public set start_seed(value: number) {
    if (value && value != this._start_seed) {
      this._start_seed = value;
      this.seed = value;
      this.generateBoard();
    }

  }
  public get start_seed(): number {

    return this._start_seed;
  }


  ngOnInit() {
    // this.bbserv.getBoardData("SomeKey").subscribe((res) => {
    //   let tempData = [];
    //   this.layoutOrder.forEach((tile_num) => {
    //     tempData.push(res.board_cells[tile_num]);
    //   });
    //   this.boardData = tempData;
    // }, (err) => {

    // })

  }
  generateBoard() {
    this.layoutOrder = this.shuffleTiles();
    this.bbserv.getBoardData("parent_board").subscribe((res) => {
      let tempData = [];
      this.layoutOrder.forEach((tile_num) => {

        tempData.push(res.data[tile_num]);
      });
      this.boardData = tempData;
    }, (err) => {

    })
  }

  random() {
    var x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }

  randomTIleNum() {
    return Math.floor(this.random() * 24);
  }

  shuffleTiles() {
    let tileArray = [];
    while (tileArray.length < 24) {
      const tileNum = this.randomTIleNum();

      if (tileArray.indexOf(tileNum) === -1) {
        tileArray.push(tileNum);
      }
    }
    return tileArray;
  }



}
