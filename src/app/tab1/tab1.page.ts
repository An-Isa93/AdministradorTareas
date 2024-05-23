import { Component } from '@angular/core';
import { Tarea } from '../services/Tarea';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tareas: Tarea[] = [];
  
  constructor(private TareasService : TareasService) {}
  ngOnInit() {
    this.tareas = this.TareasService.obtenerTareas();
  }

  tareasTerminadas(index: number) {
    this.TareasService.tareasTerminadas(index);
  }
}
