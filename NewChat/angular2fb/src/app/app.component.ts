import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {AuthService} from './providers/auth.service';
import {Router} from '@angular/router';
import auth = firebase.auth;
import {NotificationService} from "./notifications/notification.service";
import {TypeEnum, Notification} from "./notifications/notification.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private name: string = 'Chat internetowy';
  private isLoggedIn: boolean = false;

  currentUser_email: string = '';
  currentUser_name: string = '';

  constructor(angf: AngularFire, public authService: AuthService, private router: Router, private notificationService: NotificationService) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          localStorage.removeItem('currentUser');
          this.router.navigate(['login']);
        }
        else {
          this.isLoggedIn = true;
          this.currentUser_name = auth.google.displayName;
          this.currentUser_email = auth.google.email;
          localStorage.setItem('currentUser', this.currentUser_name);
          this.notificationService.add(<Notification> {
            type: TypeEnum.success,
            message: 'Witaj, ' + this.currentUser_name
          });
          this.router.navigate(['room-list']);
        }
      }
    )
  }

  logout() {
    this.authService.logout();
    // this.router.navigate(['login']);
  }
}

