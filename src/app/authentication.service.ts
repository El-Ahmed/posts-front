import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userLogged = false;
  private users:User[] = []
  constructor() { }

  isUserLogged() {
    return this.userLogged;
  }

  login(user: User) {

    this.users.forEach(useri=> {
      if (useri.username == user.username && useri.password == useri.password) {
        this.userLogged = true;
        return;
      }
    })

    return this.userLogged
  }

  logout() {
    this.userLogged = false;
  }

  register(user: User) {
    if(this.users.some(useri=> useri.username === user.username)) {
      return false;
    }
    this.users.push(user)
    return true;
  }

}
