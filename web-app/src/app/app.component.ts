import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public seedNum;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const seed = params['seed'];
      if (seed) {
        this.seedNum = this.convertStringToNum(seed);
      }

    });
  }

  convertStringToNum(newString): number {
    let total = 0;
    for (var i = 0; i < newString.length; i++) {
      total += newString.charCodeAt(i);
    }
    return total;
  }
}
