import { Injectable } from '@angular/core';
import { Room } from './room.model';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFire, FirebaseListObservable } from "angularfire2";

@Injectable()
export class RoomService {

  constructor (private af: AngularFire) {}

  getRooms(): FirebaseListObservable<Room[]> {
    return this.af.database.list('rooms');
  }

  getRoom(id: number): Observable<Room> {
    return this.getRooms()
      .map(rooms => rooms.find(room => room.id === id));
  }

  addRoom(room: Room){
    const id_number = Number(room.id);
    return this.af.database.list('rooms').push(({id: id_number, name: room.name})).then(
      () => console.log('item added'),
      console.error
    );
  }

  deleteRoom(id: number){
    const roomList = this.af.database.list('rooms', {
      preserveSnapshot: true,
      query:{
        orderByChild: 'id',
        equalTo: id,
        limitToFirst:1
      }
    });

    roomList.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        snapshot.ref.remove();
      });
    })

  }

}
