import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elearning-platform-fe';
  constructor(private http: HttpClient) {
    this.getData().subscribe((data) => {
      console.log(data);
    });
  }

  getData() {
    return this.http.post('http://localhost:5001/auth/login', {
      username: 'miroslav_mirkovic',
      password: '3107999710069',
    });
  }
}
