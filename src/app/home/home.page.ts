import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private http: HttpClient) {}

  fetch() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1', {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'blob',
      })
      .subscribe();
  }
}
