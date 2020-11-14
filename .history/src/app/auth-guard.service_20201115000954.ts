import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SolidAuthService } from 'ngx-solid';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authenticationService: SolidAuthService,
    public router: Router
  ) { }

  async canActivate(): Promise<boolean> {
    const session = await this.authenticationService.getSession();

    // If no session, take the user to the login page
    if(!session){
      this.router.navigate(['login']);
    }

    return session ? true : false;
  }

}