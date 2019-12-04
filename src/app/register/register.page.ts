import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { User } from '../user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user:User = new User();
  errors: any = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  response(response): void{
    
    if(response.success===false){
      
      if( response.errors.name == 'MissingUsernameError' ){
        this.errors.username = 'Please enter a username';
      }

      if( response.errors.name == 'UserExistsError' ){
        this.errors.username = 'A user with the given username is already registered';
      }

      if( response.errors.name == 'MissingPasswordError' ){
        this.errors.password = 'Please enter a password';
      }

      if( response.errors.email ){
        this.errors.email = response.errors.errors.email.message;
      }

    }

    if(response.success===true){
      this.router.navigate(['/login']);
    }
  }

  onSubmit(): void{
    this.authService.register(this.user).subscribe(
      (response:any) => {
        this.response(response);
      }
    );
  }

}
