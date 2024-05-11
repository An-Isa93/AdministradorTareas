import { Injectable } from '@angular/core';
import { Tarea } from './Tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  tareas: Tarea[] = [];

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    console.log("Tareas:", this.tareas);
  }

  obtenerTareas(): Tarea[] {
    return this.tareas;
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
