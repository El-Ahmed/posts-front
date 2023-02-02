import { Component } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthenticationService) {

  }

  isUserLogged() {
    return this.authService.isUserLogged()
  }

  logout() {
    this.authService.logout();
  }


}
