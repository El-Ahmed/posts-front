import { Component } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {NgForm} from "@angular/forms";
import {User} from "../user";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {

  register = false
  error = false
  errorRegister = false

  constructor(private authenticationService:AuthenticationService) {

  }


  toggleRegister() {
    this.error = false
    this.errorRegister = false
    this.register = !this.register
  }

  onSubmit(f: NgForm) {
    const user:User = {
        username: f.value.username,
        password: f.value.password
      }

    if(this.register) {
      if (this.registerUser(user)) {
        this.loginUser(user);
        return;
      }
      this.errorRegister= true
      return;
    }

    if(this.loginUser(user)) {
      return;
    }
    this.error= true
  }

  registerUser(user: User) {
    return this.authenticationService.register(user);

  }
  loginUser(user: User) {
    return this.authenticationService.login(user);

  }



}
