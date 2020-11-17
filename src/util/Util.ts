import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Util {
  constructor(private http: HttpClient) {
  }

  params = {
    sources: 'google-news',
    apiKey: '0daa40ca50444db4884a60637002c6fc'
  };
  url = 'http://newsapi.org/v2/top-headlines';

  fncNewsService() {
    return this.http.get(this.url, {params: this.params});
  }
}
