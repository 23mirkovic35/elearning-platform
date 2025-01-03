import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  ElearningPlatformCustomInputModule,
  ElearningPlatformSystemMessageModule,
} from '@elearning-platform/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ElearningPlatformCustomInputModule,
    ElearningPlatformSystemMessageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
