import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app works!';
  students: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    let resp = this.http.get('http://localhost:3000/userList');
    resp.subscribe((data) => (this.students = data));
  }
}
