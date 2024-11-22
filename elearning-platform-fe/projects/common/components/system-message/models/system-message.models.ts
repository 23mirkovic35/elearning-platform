import { SystemMessageType } from '../constants/system-message.constants';

export interface SystemMessage {
  id: number;
  text: string;
  type: SystemMessageType;
}
