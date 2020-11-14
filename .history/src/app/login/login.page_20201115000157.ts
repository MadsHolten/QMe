import { Component, OnInit } from '@angular/core';
import { SolidAuthService } from 'ngx-solid';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: SolidAuthService
  ) { }

  ngOnInit() {
    console.log("Login init")
  }

  // Log the user in using the provider specified
  async login(idp){

    try{
      await this.authService.login(idp);
    }catch(e){
      console.log(e);
    }

  }

}
