import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../providers/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  returnUrl: string;

  constructor(public authService: AuthService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    console.log('On inint - login');
  }

  ngOnDestroy() {
    console.log('On destroy - login');
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate([this.returnUrl]);
    });
  }
}
