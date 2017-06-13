import {Injectable} from '@angular/core';
import {Message} from './message.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Injectable()
export class MessageService {

  constructor(private af: AngularFire) {
  }

  getMessages(idRoom): FirebaseListObservable<Message[]> {
    return this.af.database.list('messages'+idRoom);
  }

  addMessage(idRoom: number, message: Message) {
    return this.af.database.list('messages'+idRoom).push({name: message.name, date: message.date, sender: message.sender}).then(
      () => console.log('message added'+message.date),
      console.error
    );
  }

}
