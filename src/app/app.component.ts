import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twodays';
  greenColor = 'green';
  redColor = 'red';
  focusStatus = '';
  dataFocus = '';

  constructor( private http: HttpClient) {
  }

funcSendBtn(): void{
    const url = 'http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=0daa40ca50444db4884a60637002c6fc';
    this.http.get(url).subscribe(items => {
      console.log('items: ' + JSON.stringify(items));
    });
  }
}
