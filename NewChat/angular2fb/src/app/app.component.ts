import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AuthService } from './providers/auth.service';
import  { Router } from '@angular/router'
import auth = firebase.auth;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private name: string = 'Chat internetowy';
  private isLoggedIn: Boolean;

  currentUser_email: string = '';
  currentUser_name: string = '';

  items: FirebaseListObservable<any[]>;
  constructor(angf: AngularFire ,public authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if(auth == null){
          this.isLoggedIn = false;
          this.router.navigate(['login']);
        }
        else{
          this.isLoggedIn = true;
          this.items = angf.database.list('/items');
          this.currentUser_name = auth.google.displayName;
          this.currentUser_email = auth.google.email;
          this.router.navigate(['room-list']);
        }
      }
    )
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
    }
  }

