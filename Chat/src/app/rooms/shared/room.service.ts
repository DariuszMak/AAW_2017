import { Injectable }     from '@angular/core';
import { Http, Response} from '@angular/http';
import { Room } from './room.model';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RoomService {
  constructor (private http: Http) {}
  private roomsUrl = 'app/rooms/shared/room-list.json';

  getRooms() : Observable<Room[]> {
    return this.http.get(this.roomsUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRoom(id: number): Observable<Room> {
    return this.getRooms()
      .map(rooms => rooms.find(room => room.id === id));
  }
}

