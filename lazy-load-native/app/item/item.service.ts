import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {
  url = 1;
  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    this.url += 1;
    return this.http
    .get(`https://jsonplaceholder.typicode.com/photos/${this.url}`);
  }

}
