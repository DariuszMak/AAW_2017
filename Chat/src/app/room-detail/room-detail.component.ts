import { Room } from '../rooms/room.model';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../rooms/room.service';

import { Subscription } from "rxjs";

@Component({
  selector: 'my-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls:  ['./room-detail.component.css']
})

export class RoomDetailComponent implements OnInit, OnDestroy {
  private room: Room;
  private subscribe: Subscription;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  this.subscribe = this.route.params.subscribe(params => {
      this.roomService.getRoom(+params['id']).subscribe(room => this.room = room);
    });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}
