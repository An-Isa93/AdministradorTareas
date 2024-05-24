import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../services/Tarea';
import { TareasService } from '../services/tareas.service';
import { ModalController } from '@ionic/angular';

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
