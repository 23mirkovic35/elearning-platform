import { Component, Input, OnInit } from '@angular/core';
import {
  DEFAULT_ICON_CONFIGURATION,
  ICON_TYPE,
} from './constants/system-icon.constants';

@Component({
  selector: 'elearning-platform-icon',
  templateUrl: './system-icon.component.html',
  styleUrls: ['./system-icon.component.scss'],
})
export class ElearningPlatformIconComponent {
  @Input() name!: string;
  public iconType = ICON_TYPE;
  public defaultIconConfiguration = DEFAULT_ICON_CONFIGURATION;

  constructor() {}
}
