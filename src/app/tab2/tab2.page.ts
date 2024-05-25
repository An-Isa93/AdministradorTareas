import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
import { Foto } from '../services/foto';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  formAgregar:FormGroup;
  public fotos: Foto[] = [];

  constructor (private TareasService : TareasService, private alertController: AlertController) {
    this.formAgregar= new FormGroup({
      Nombre: new FormControl(),
      Fecha: new FormControl(),
      Descripcion: new FormControl(),
      Materia: new FormControl()
    })
   }
   async tomarFoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    // Crear un objeto Foto con las rutas de archivo y web de la foto capturada
    const nuevaFoto: Foto = {
      filepath: capturedPhoto?.path || '',
      webViewPath: capturedPhoto?.webPath || ''
    };

    // Llamar al método addNewToGallery() y pasar el objeto Foto como argumento
    await this.TareasService.addNewToGallery(nuevaFoto);
  }

  async alertaCampoIncompleto() {
    const alert = await this.alertController.create({
      header: 'Campos Incompletos',
      message: 'Completa todos los campos para agregar una anueva tarea.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
 async onSubmit(){
    console.log(this.formAgregar.value);
    this.TareasService.agregarTarea(this.formAgregar.value);

      const alert = await this.alertController.create({
        message: 'Tarea agregada con éxito :D',
        buttons: ['Aceptar'],
      });

      await alert.present();
      this.formAgregar.reset();
  }

}
