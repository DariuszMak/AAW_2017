import { Component } from '@angular/core';
import { RoomService } from '../rooms/room.service';
import { NotificationService } from "../notifications/notification.service";
import { Notification, TypeEnum } from "../notifications/notification.model";

@Component({
  moduleId: module.id,
  templateUrl: './new-room.component.html',
//  styleUrls:  ['./about.component.css']
})

export class NewRoomComponent {

  constructor(
    private roomService: RoomService,
    private notificationService: NotificationService
  ) {}

  model: any = {};

  create(){
    this.roomService.addRoom(this.model);
  }
}
