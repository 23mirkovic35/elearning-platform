import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElearningPlatformSystemMessageComponent } from './system-message.component';
import { ElearningPlatformIconModule } from '../system-icon/system-icon.module';

@NgModule({
  declarations: [ElearningPlatformSystemMessageComponent],
  imports: [CommonModule, ElearningPlatformIconModule],
  exports: [ElearningPlatformSystemMessageComponent],
})
export class ElearningPlatformSystemMessageModule {}
