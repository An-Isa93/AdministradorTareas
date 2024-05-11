import { Component, OnInit } from '@angular/core';
import { Tarea } from '../Tarea';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  ngOnInit() {};

  nuevaTarea: Tarea = {nombre:'', materia: '', mes:'', anio:0, descripcion:''};

  constructor (private TareasService : TareasService) { }
  
  agregarTarea() {
    this.TareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = { nombre: '', materia: '', descripcion: '', mes: '', anio: 0 };
  }

}
