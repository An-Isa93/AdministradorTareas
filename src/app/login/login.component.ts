import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  @Output() showRegister: EventEmitter<boolean> = new EventEmitter<boolean>();
  formLogin: FormGroup;
  constructor(private userService: UserService, private router:Router, private alertController: AlertController   ) { 
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {}
  async onSubmit() {
    try {
      // Attempt to log in
      const response = await this.userService.login(this.formLogin.value);
  
      // Create and present the alert
      const alert = await this.alertController.create({
        message: 'Inicio de Sesion',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
  
      // Log the response and navigate to the new route
      console.log(response);
      this.router.navigate(['/tabs/tab1']);
    } catch (error) {
      // Show an error message if login fails
      alert("Usuario o Contraseña incorrectas");
    }
  }
  
  loginWithGoogle(){
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/tabs/tab1']);
      })
      .catch(error => alert("Error"));
  }
  goToRegister() {
    this.router.navigate(['/registro']);
  }



}
