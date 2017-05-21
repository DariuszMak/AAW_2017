import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService{

  login(username: string) {
    localStorage.setItem('currentUser', username);
    if(username){
      console.log('Service username added to local storage: ' + username);
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('currentUser')
    console.log('Current user removed from service')
  }
}
