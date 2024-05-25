import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showRegistro: boolean = false;
  showLogin: boolean = true;

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {
    // Redirigir según el estado de autenticación
    this.userService.isLoggedInObservable().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['tabs']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
  title: string="Agenda Escolar";

}
