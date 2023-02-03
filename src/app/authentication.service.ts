import { Injectable } from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userLogged = false;
  private username = ''

  constructor( private http: HttpClient) { }

  isUserLogged() {
    return this.userLogged;
  }

  login(user: User) {
    const req = this.http.post('/api/user/login', user)
    req.subscribe({
      next: ()=> {
        this.username = user.username
        this.userLogged = true
      }
    })
    return req
  }

  logout() {
    this.http.get('/api/user/logout').subscribe(()=> {
      this.userLogged = false;
    })
  }

  register(user: User) {
    return this.http.post('/api/user/register',user)
  }

  getUsername() {
    return this.username
  }



}
