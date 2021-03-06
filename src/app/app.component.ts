import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from './modules/authentication/services/current-user.service';
import { AuthService } from './modules/authentication/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: any;
  opened = false;

  constructor(
    private currentUserService: CurrentUserService,
    private authService: AuthService,
    private router: Router
  ) {
    router.events.subscribe(() => this.opened = false);
  }

  ngOnInit() {
    this.currentUserService.onUser().subscribe(user => this.user = user);
  }

  logout() {
    this.authService.logout();
  }
}
