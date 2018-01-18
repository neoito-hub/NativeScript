import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';


@Injectable()
export class ItemService {
  url = 1;
  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    this.url += 1;
    console.log("in")
    return this.http
      .get(`https://jsonplaceholder.typicode.com/posts/1`);
  }

}
//.get(`https://api.github.com/users?since=${this.url}`);   get(`https://jsonplaceholder.typicode.com/posts/1`);