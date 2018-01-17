import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
