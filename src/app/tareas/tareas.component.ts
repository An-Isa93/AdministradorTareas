import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from '../services/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})


export class TareasComponent  {

  @Input() tarea: Tarea | undefined;
  
  constructor( private modalCtrl: ModalController) {}
  
  
  cerrar() {
    return this.modalCtrl.dismiss();
  }

}
