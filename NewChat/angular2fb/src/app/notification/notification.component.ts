import {Component, OnInit, OnDestroy} from '@angular/core';

import {NotificationService} from '../notifications/notification.service';
import {Notification} from '../notifications/notification.model';
import {Subscription} from "rxjs";

@Component({
  selector: 'my-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit, OnDestroy {

  private notes: Notification[];

  private subscribe: Subscription;

  constructor(private notifications: NotificationService) {
  }

  private hide() {
    if (this.notes.length > 0) {
      this.notes.splice(0, 1);
    }
  }

  ngOnInit(): void {
    this.notes = new Array<Notification>();

    this.subscribe = this.notifications.getStream().subscribe(note => {
      this.notes.push(note);

      setTimeout(() => {
        this.hide()
      }, 15000)

    });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
