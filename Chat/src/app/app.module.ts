import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { AppRoutingModule } from './app-routing.module';
import { RoomService } from "./rooms/room.service";
import { NotificationService } from "./notifications/notification.service";
import { NotificationComponent } from "./notification/notification.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    RoomListComponent,
    RoomDetailComponent,
    PageNotFoundComponent,
    NotificationComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    RoomService,
    NotificationService
  ]
})

export class AppModule { }

