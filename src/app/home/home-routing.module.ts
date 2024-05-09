import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { TareasComponent } from '../tareas/tareas.component';
import { HomePage } from './home.page';
const routes: Routes = [
  
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'tareas',
        component: TareasComponent
      },
      {
        path:'registro',
        component: RegistroComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'agregar-tarea',
        component: AgregarTareaComponent
      }
    ]
  },
  {
    path:'home',
    component:HomePage,
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
