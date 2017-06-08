import {Component} from '@angular/core';
import {RoomService} from '../rooms/room.service';
import {NotificationService} from '../notifications/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Notification, TypeEnum} from '../notifications/notification.model';

@Component({
  moduleId: module.id,
  templateUrl: './new-room.component.html',
//  styleUrls:  ['./about.component.css']
})

export class NewRoomComponent {

  model: any = {};

  constructor(private roomService: RoomService,
              private notificationService: NotificationService,
              private router: Router) {
  }


  create() {
    this.roomService.addRoom(this.model);
    this.notificationService.add(<Notification> {
      type: TypeEnum.success,
      message: 'Dodano pokój: id:' + this.model.id + ', name: ' + this.model.name
    });
    this.router.navigate(['/room-list']);
  }
}
