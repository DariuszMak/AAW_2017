import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Room } from '../rooms/shared/room.model';
import { RoomService } from '../rooms/shared/room.service';

@Component({
  selector: 'my-list-room',
  templateUrl: './room-list.component.html',
  styleUrls:  ['./room-list.component.css'],
  providers: [RoomService]
})
export class RoomListComponent implements OnInit {
  rooms: Room[];
  selectedRoom: Room;

  constructor(
    private roomService: RoomService,
    private router: Router,) { }

  getRooms() {
    this.roomService.getRooms()
      .subscribe(
        rooms => this.rooms = rooms,
        err => {
          console.log(err);
        });
  }

  ngOnInit(): void {
    this.getRooms();
  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
    this.router.navigate(['/room-list', this.selectedRoom.id]);
  }

}
