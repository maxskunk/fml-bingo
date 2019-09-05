import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bingo-cell',
  templateUrl: './bingo-cell.component.html',
  styleUrls: ['./bingo-cell.component.scss']
})
export class BingoCellComponent implements OnInit {

  constructor() { }
  private _cellData: Object;
  @Input()
  public set cellData(value: Object) {
    if (value && this.cellIndex) {
      const obj = value["board_cells"][this.cellIndex];
      this.label = obj.label;

      this._cellData = value;
    }

  }
  public get cellData(): Object {

    return this._cellData;
  }

  @Input()
  public cellIndex: number;


  @Input()
  public label: string = "";

  ngOnInit() {

  }

}
