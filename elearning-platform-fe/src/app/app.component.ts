import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { SystemMessageType } from 'projects/common/components/system-message/constants/system-message.constants';
import { SystemMessage } from 'projects/common/components/system-message/models/system-message.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elearning-platform-fe';
  messages: SystemMessage[] = [
    {
      id: 1,
      text: 'Account has been successfully created.',
      type: SystemMessageType.SUCCESS,
    },
    // {
    //   id: 2,
    //   text: 'Invalid username.',
    //   type: SystemMessageType.ERROR,
    // },
    // {
    //   id: 3,
    //   text: 'Some warning',
    //   type: SystemMessageType.WARNING,
    // },
  ];
  constructor(private http: HttpClient) {
    this.getData().subscribe((data) => {
      console.log(data);
    });
  }

  getData() {
    const password = CryptoJS.SHA256('3107999710069').toString();
    return this.http.post('http://localhost:5001/auth/login', {
      username: 'miroslav_mirkovic',
      password,
    });
  }

  onClose(messageId: number) {
    this.messages = this.messages.filter((message) => message.id !== messageId);
  }
}
