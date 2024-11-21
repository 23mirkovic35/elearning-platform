import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ElearningPlatformCustomInputComponent } from './custom-input.component';

@NgModule({
  declarations: [ElearningPlatformCustomInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ElearningPlatformCustomInputComponent],
})
export class ElearningPlatformCustomInputModule {}
