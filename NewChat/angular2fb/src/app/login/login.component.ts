/**
 * Created by Dawid on 2017-05-30.
 */
import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls:  ['login.component.less']
})
export class LoginComponent {


  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        console.log('You are authenticated', auth)
      } else {
        console.log('You are not authenticated')
      }
    });  }
  model: any = {};


  login() {
    console.log('Logging...');
    this.af.auth.login({
      email: this.model.email,
      password: this.model.password
    });
  }
}
