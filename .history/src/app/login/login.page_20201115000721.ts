import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolidAuthService } from 'ngx-solid';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: SolidAuthService,
    public router: Router
  ) { }

  ngOnInit() {
    const session = this.authService.getSession();
    if(session) this.router.navigate(['']);
  }

  // Log the user in using the provider specified
  async login(idp){

    try{
      await this.authService.login(idp);
      this.router.navigate(['']);
    }catch(e){
      console.log(e);
    }

  }

}
