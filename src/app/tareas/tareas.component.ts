import { Component, OnInit } from '@angular/core';
import { Tarea } from '../Tarea';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  tareas: Tarea[] = [];
  
  constructor (private TareasService : TareasService) { }

  ngOnInit() {
    this.tareas = this.TareasService.obtenerTareas();
  }

  eliminarTarea(index: number) {
    console.log("Index a eliminar:", index);
    this.TareasService.eliminarTarea(index);
  }

}
