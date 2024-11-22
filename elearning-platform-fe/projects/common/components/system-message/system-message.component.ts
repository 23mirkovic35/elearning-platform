import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SystemMessage } from './models/system-message.models';
import { SystemMessageType } from './constants/system-message.constants';

@Component({
  selector: 'elearning-platform-system-message',
  templateUrl: './system-message.component.html',
  styleUrls: ['./system-message.component.scss'],
})
export class ElearningPlatformSystemMessageComponent {
  @Input() message!: SystemMessage;
  @Output() close = new EventEmitter<number>();
  public MESSAGE_TYPE = SystemMessageType;
  constructor() {}

  public onClose(event: MouseEvent): void {
    this.close.emit(this.message.id);
  }
}
