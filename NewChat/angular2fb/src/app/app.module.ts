import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { firebaseConfig } from "../environments/firebase.config";
import { RoomListComponent } from "./room-list/room-list.component";
import { NotificationComponent } from "./notification/notification.component";
import { RoomDetailComponent } from "./room-detail/room-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { RoomService } from "./rooms/room.service";
import { NotificationService } from "./notifications/notification.service";

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    RoomDetailComponent,
    PageNotFoundComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [
    RoomService,
    NotificationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
