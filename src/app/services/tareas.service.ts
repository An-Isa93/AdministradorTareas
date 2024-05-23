import { Injectable } from '@angular/core';
import { Tarea } from './Tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas: Tarea[] = [];
  tareasHechas: Tarea[] = [];

  constructor() { 
    this.tareas.push({ nombre: 'Terminar aplicación', descripcion: 'Agenda escolar', materia: 'Aplicaciones Móviles', fecha: '2024-05-24' }); //Tarea de ejemplo
  }

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    console.log("Tareas:", this.tareas);
  }

  obtenerTareas(): Tarea[] {
    return this.tareas;
  }

  tareasTerminadas(index: number) {
    const tareaTerminada = this.tareas.splice(index, 1)[0]; //se crea un objeto con el contenido de la tarea eliminada
    this.tareasHechas.push(tareaTerminada); //Se agrega la tarea eliminada al areglo de Tareas Hechas
    console.log('Tareas terminadas:', this.tareasHechas);
  }
}
