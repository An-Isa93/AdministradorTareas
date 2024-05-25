export interface Foto {
    filepath: string;
    webViewPath?: string;
  }
  
export interface Tarea extends Foto {
    id?: string;
    Nombre: string,
    Materia: string,
    Fecha: string,
    Descripcion: string;
}