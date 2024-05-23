import { Component } from '@angular/core';
import { Tarea } from '../services/Tarea';
import { TareasService } from '../services/tareas.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  nuevaTarea: Tarea = {nombre:'', materia: '', fecha: '', descripcion:''};

  constructor (private TareasService : TareasService, private alertController: AlertController) { }
  
  async agregarTarea() {
    if (this.formularioValido()){
      this.TareasService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = {nombre: '', materia: '', fecha: '', descripcion: ''};
    }  else {
      await this.alertaCampoIncompleto();
    }
  }

  formularioValido(): boolean {
    return this.nuevaTarea.nombre.trim() !== '' && this.nuevaTarea.fecha !== '';
  }

  async alertaCampoIncompleto() {
    const alert = await this.alertController.create({
      header: 'Campos Incompletos',
      message: 'Completa todos los campos para agregar una anueva tarea.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

}
