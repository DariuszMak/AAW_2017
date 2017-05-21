import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
@Component({
  moduleId: module.id,
  selector: 'my-authentication',
  templateUrl: './authentication.component.html'
  // styleUrls:  ['./room-detail.component.css']
})

export class AuthenticationComponent implements OnInit{
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ){}

  ngOnInit()
  {
    this.authenticationService.logout()
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }



}
