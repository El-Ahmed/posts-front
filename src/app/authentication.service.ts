import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userLogged = false;
  constructor() { }

  isUserLogged() {
    return this.userLogged;
  }

  login(username: string, password: string) {
    if (username != "ahmed" || password != "ahmed") {
      return false;
    }
    this.userLogged = true;
    return true;
  }

  logout() {
    this.userLogged = false;
  }

}
