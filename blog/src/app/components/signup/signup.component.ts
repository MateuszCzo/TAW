import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public credentials = {
    name: '',
    email: '',
    password: ''
  }

  constructor(public authService: AuthService, private router: Router) {
  }

  create() {
    this.authService.createOrUpdate(this.credentials)
      .subscribe((result) => {
        return result;
      });
    this.router.navigate(['/']);
  }
}
