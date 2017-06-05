import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { firebaseConfig } from '../environments/firebase.config';
import { RoomListComponent } from './room-list/room-list.component';
import { NotificationComponent } from './notification/notification.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomService } from './rooms/room.service';
import { NotificationService } from './notifications/notification.service';
import { ConversationComponent } from './conversation/conversation.component';
import { QuillEditorModule } from 'ng2-quill-editor';
import {AuthService} from "./providers/auth.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRoomComponent,
    RoomListComponent,
    RoomDetailComponent,
    PageNotFoundComponent,
    NotificationComponent,
    ConversationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    QuillEditorModule
  ],
  providers: [
    RoomService,
    NotificationService,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
