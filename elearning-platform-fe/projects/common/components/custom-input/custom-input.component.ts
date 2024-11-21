import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'elearning-platform-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class ElearningPlatformCustomInputComponent implements OnInit {
  @Input() label!: string;
  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();

  public formControl: FormControl;

  constructor() {
    this.formControl = new FormControl('', [Validators.required]);
  }

  public ngOnInit(): void {
    this.formControl.valueChanges.subscribe((value: string) => {
      this.onValueChange.emit(value);
    });
  }
}
