import { Room } from '../rooms/shared/room.model';

import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RoomService } from '../rooms/shared/room.service';

@Component({
  selector: 'my-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls:  ['./room-detail.component.css'],
  providers: [RoomService]
})
export class RoomDetailComponent implements OnInit{
  room: Room;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.roomService.getRoom(+params['id']))
      .subscribe(room => this.room = room);
  }
}
