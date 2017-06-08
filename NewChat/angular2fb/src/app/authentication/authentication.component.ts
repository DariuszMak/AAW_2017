import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {getBootstrapListener} from "@angular/router/src/router_module";
import {NotificationService} from "../notifications/notification.service";
import {TypeEnum, Notification} from "../notifications/notification.model";
@Component({
  moduleId: module.id,
  selector: 'my-authentication',
  templateUrl: './authentication.component.html'
  // styleUrls:  ['./room-detail.component.css']
})

export class AuthenticationComponent implements OnInit, OnDestroy {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.authenticationService.logout()
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnDestroy() {
    console.log('On destroy - login');
  }

  login() {
    this.loading = true;
    console.log('Sending username: ' + this.model.username);
    // getBootstrapListener
    this.loading = this.authenticationService.login(this.model.username);
    this.loading = !this.loading;

    this.notificationService.add(<Notification> {type: TypeEnum.success, message: 'Witaj, ' + this.model.username});

    if (!this.loading) {
      this.router.navigate([this.returnUrl]);
    }
  }
}
