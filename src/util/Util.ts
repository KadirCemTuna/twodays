import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Util {
  ref = '5380f5dbcc3b1021f93ab24c3a1aac24';

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

  getProduct() {
    const url = 'http://jsonbulut.com/json/product.php?ref=5380f5dbcc3b1021f93ab24c3a1aac24&start=0';
    return this.http.get(url);
  }

  userRegister(params: any) {
    params.ref = this.ref;
    const url = 'http://jsonbulut.com/json/userRegister.php';
    return this.http.get(url, {params});
  }
}
