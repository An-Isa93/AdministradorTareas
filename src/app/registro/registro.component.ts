import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  formReg: FormGroup;
  constructor(private userService: UserService, private router:Router, private alertController:AlertController ) { 
    this.formReg = new FormGroup({
      displayName: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }
  title: string= "Registro";
  ngOnInit() {}
  async onSubmit() {
    try {
      const response = await this.userService.register(this.formReg.value);
      console.log(response);

      const alert = await this.alertController.create({
        message: 'Usuario Registrado',
        buttons: ['Aceptar'],
      });
      await alert.present();

      this.router.navigateByUrl('/login');
    } catch (error) {
      const errorAlert = await this.alertController.create({
        message: 'Error en el registro',
        buttons: ['Aceptar'],
      });
      await errorAlert.present();
    }
  }

  

}
