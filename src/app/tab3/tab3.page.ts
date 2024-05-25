import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private userService: UserService, private router: Router,  private alertController: AlertController ) {}
  user: User | null = null;

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      console.log('User observable emitted:', user);
      this.user = user;  
    });
  }

 async logout() {
    const alert = await this.alertController.create({
      message: 'Regresa pronto :D',
      buttons: ['Aceptar'],
    });

    await alert.present();
    this.userService.logout().then(() => {
      this.router.navigate(['login']);
    });
    
  }

  

}
