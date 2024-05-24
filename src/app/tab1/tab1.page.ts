import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from '../services/Tarea';
import { TareasService } from '../services/tareas.service';
import { TareasComponent } from '../tareas/tareas.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tareas: Tarea[] = [];
  
  constructor(private TareasService : TareasService, private modalCtrl: ModalController) {}
  
  ngOnInit(): void {
    /*this.tareas = this.TareasService.obtenerTareas();*/
    this.TareasService.getTareas().subscribe(tareas => {
      console.log(tareas); // Verifica la estructura aquí
      tareas.forEach(tarea => console.log(tarea)); // Verifica cada tarea
      this.tareas = tareas;
    });
    
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

 async deleteTarea(tarea: Tarea){
   const response = await this.TareasService.deleteTarea(tarea);
   console.log(response);
  }
}
