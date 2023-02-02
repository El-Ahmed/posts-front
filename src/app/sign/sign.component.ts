import { Component } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {

  register = false
  error = false

  constructor(private authenticationService:AuthenticationService) {

  }


  toggleRegister() {
    this.register = !this.register
  }

  onSubmit(f: NgForm) {
    if(this.authenticationService.login(f.value.username,f.value.password)) {
      return;
    }
    this.error= true

  }



}
