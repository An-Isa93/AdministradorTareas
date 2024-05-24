import { Component } from '@angular/core';
import { Tarea } from '../services/Tarea';
import { TareasService } from '../services/tareas.service';
import { ModalController } from '@ionic/angular';
import { TareasComponent } from '../tareas/tareas.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tareas: Tarea[] = [];
  
  constructor(private TareasService : TareasService, private modalCtrl: ModalController) {}
  
  ngOnInit() {
    this.tareas = this.TareasService.obtenerTareas();
  }

  tareasTerminadas(index: number) {
    this.TareasService.tareasTerminadas(index);
  }

  async openModal(tarea: Tarea) {
    const modal = await this.modalCtrl.create({
      component: TareasComponent,
      componentProps: {
        tarea: tarea
      }
    });
    return await modal.present();
  }
}
