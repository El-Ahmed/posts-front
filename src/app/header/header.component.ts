import { Component } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthenticationService,
              private themeService: ThemeService) {

  }

  isUserLogged() {
    return this.authService.isUserLogged()
  }

  logout() {
    this.authService.logout();
  }

  toggleTheme() {
    this.themeService.toggle_theme()
  }
  isDarkTheme() {
    return this.themeService.theme == 'dark'
  }

}
