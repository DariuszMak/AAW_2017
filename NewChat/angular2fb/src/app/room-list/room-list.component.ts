import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

import {Room} from '../rooms/room.model';
import {RoomService} from '../rooms/room.service';
import {Subscription} from 'rxjs';

import {NotificationService} from '../notifications/notification.service';
import {Notification, TypeEnum} from '../notifications/notification.model';

@Component({
  selector: 'my-list-room',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})

export class RoomListComponent implements OnInit, OnDestroy {
  private rooms: Array<Room>;
  private selectedRoom: Room;
  private subscribe: Subscription;
  private errorMessage: string = '';

  constructor(private roomService: RoomService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  getRooms() {
    this.subscribe = this.roomService.getRooms()
      .subscribe(
        rooms => this.rooms = rooms,
        error => {
          this.errorMessage = 'Błąd przy pobieraniu listy pokoi: ' + error;
          this.notificationService.add(<Notification> {type: TypeEnum.error, message: this.errorMessage});
        });
  }

  ngOnInit(): void {
    this.getRooms();
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
    this.router.navigate(['/room-list', this.selectedRoom.id]);
  }


}
