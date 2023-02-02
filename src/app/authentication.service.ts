import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userLogged = false;
  private users:User[] = []
  private username = ''

  constructor() { }

  isUserLogged() {
    return this.userLogged;
  }

  login(user: User) {

    this.users.forEach(useri=> {
      if (useri.username == user.username && useri.password == useri.password) {
        this.userLogged = true;
        this.username = useri.username
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

  getUsername() {
    return this.username
  }



}
