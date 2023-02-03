import { Component } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {NgForm} from "@angular/forms";
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {

  register = false
  error = false
  errorRegister = false

  constructor(private authenticationService:AuthenticationService, private router: Router) {

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
      this.authenticationService.register(user).subscribe({
        next:()=> {
          this.authenticationService.login(user).subscribe({
            next:()=> {
              this.router.navigate(['/'])
            }
          })
        },
        error: ()=> {
          this.errorRegister= true
        }
      });
      return;
    }

    this.authenticationService.login(user).subscribe({
      next:()=> {
        this.router.navigate(['/'])
      },
      error:() => {
        this.error= true
      }
    })
  }

}
