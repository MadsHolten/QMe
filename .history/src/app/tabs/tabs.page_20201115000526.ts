import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SolidAuthService } from 'ngx-solid';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private authService: SolidAuthService,
    private router: Router
  ) {}

  async logout(){
    await this.authService.logout();
    this.router.navigate(['login']);
  }

}
