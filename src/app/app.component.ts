import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  constructor(private userService: UserService) { }
  showRegistro: boolean = false;
  showLogin: boolean = true;
  onShowRegister(event: boolean) {
    this.showRegistro = event;
    
  }
  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
  title: string="Agenda Escolar";
  ngOnInit() {}
}
