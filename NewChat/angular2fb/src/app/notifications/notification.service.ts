import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Notification } from './notification.model';

@Injectable()
export class NotificationService {
  private notifications = new Subject<Notification>();

  public getStream(){
    return this.notifications.asObservable();
  }

  public add(notification: Notification) {
    this.notifications.next(notification);
  }
}
