import { Component } from '@angular/core';
import { Tarea } from '../services/Tarea';
import { TareasService } from '../services/tareas.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  nuevaTarea: Tarea = {nombre:'', materia: '', mes:'', anio:0, descripcion:''};

  constructor (private TareasService : TareasService) { }
  
  agregarTarea() {
    this.TareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = { nombre: '', materia: '', descripcion: '', mes: '', anio: 0 };
  }
}
