import {Component, OnInit} from '@angular/core';
import {Article, GoogleNews} from '../model/GoogleNews';
import {Util} from '../util/Util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newsArr: Article[];
  title = 'twodays';
  greenColor = 'green';
  redColor = 'red';
  yellowColor = 'yellow';
  focusStatus = '';
  dataFocus = '';

  constructor(private util: Util) {
  }

  ngOnInit(): void {

  }

  funcSendBtn(): void {
    this.util.fncNewsService().subscribe(item => {
      const gNew: GoogleNews | any = item;
      this.newsArr = gNew.articles;
      console.log(this.newsArr);
    });
  }

}
