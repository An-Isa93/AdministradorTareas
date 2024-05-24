import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Tarea } from '../services/Tarea';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  formAgregar:FormGroup;

  nuevaTarea: Tarea = {nombre:'', materia: '', fecha: '', descripcion:''};


  constructor (private TareasService : TareasService, private alertController: AlertController) {
    this.formAgregar= new FormGroup({
      Nombre: new FormControl(),
      Fecha: new FormControl(),
      Descripcion: new FormControl(),
      Materia: new FormControl()
    })
   }
  
 /* async agregarTarea() {
    if (this.formularioValido()){
      const response= await this.TareasService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = {nombre: '', materia: '', fecha: '', descripcion: ''};
      console.log(response);
    }  else {
      await this.alertaCampoIncompleto();
    }
  }*/
/*
  formularioValido(): boolean {
    return this.nuevaTarea.nombre.trim() !== '' && this.nuevaTarea.fecha !== '';
  }*/

  async alertaCampoIncompleto() {
    const alert = await this.alertController.create({
      header: 'Campos Incompletos',
      message: 'Completa todos los campos para agregar una anueva tarea.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  onSubmit(){
    console.log(this.formAgregar.value);
    this.TareasService.agregarTarea(this.formAgregar.value);
  }

}
