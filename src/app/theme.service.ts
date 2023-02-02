import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _theme = 'light';

  constructor() {
    this._theme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute("data-bs-theme", this._theme);
  }

  get theme(): string {
    return this._theme;
  }

  set theme(value: string) {
    this._theme = value;
    document.body.setAttribute("data-bs-theme", value);
    localStorage.setItem('theme', value)
  }

  toggle_theme() {
    if (this.theme == 'light') {
      this.theme = 'dark'
    }
    else {
      this.theme = 'light'
    }

  }



}
