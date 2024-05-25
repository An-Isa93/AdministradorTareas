import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Tarea } from './Tarea';
import { Foto } from './foto';
@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas: Tarea[] = [];
  tareasHechas: Tarea[] = [];
  fotos: Foto[]=[];

  constructor(private firestore: Firestore) { 
    /*this.tareas.push({ nombre: 'Terminar aplicación', descripcion: 'Agenda escolar', materia: 'Aplicaciones Móviles', fecha: '2024-05-24' }); //Tarea de ejemplo
    */  
  }
  public async addNewToGallery(foto: Foto) {    
 
    

    // Add the photo to Firestore
    const fotosCollection = collection(this.firestore, 'Fotos');
    const docRef = await addDoc(fotosCollection, foto);
    
    // Return the document reference
    return docRef;
}


  agregarTarea(tarea:Tarea){
    const tareaNueva= collection(this.firestore,'Tareas');
    return addDoc(tareaNueva,tarea);
  }
  obtenerTareas(): Tarea[] {
    return this.tareas;
  }
  getTareas(): Observable<Tarea[]>{
    const tareaNueva= collection(this.firestore,'Tareas');
    return collectionData(tareaNueva,{idField:'id'}) as Observable<Tarea[]>;
  }
  
  tareasTerminadas(index: number) {
    const tareaTerminada = this.tareas.splice(index, 1)[0]; //se crea un objeto con el contenido de la tarea eliminada
    this.tareasHechas.push(tareaTerminada); //Se agrega la tarea eliminada al areglo de Tareas Hechas
    console.log('Tareas terminadas:', this.tareasHechas);
  }

  deleteTarea(tarea:Tarea){
    const tareaDocRef = doc(this.firestore,`Tareas/${tarea.id}`);
    return deleteDoc(tareaDocRef);
  }
}
