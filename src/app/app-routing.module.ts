import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { HomePage } from './home/home.page';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  {
    path:'',
    component: TareasComponent
    
  },
  {
    path:'home',
    component:HomePage,
    /*...canActivate(()=> redirectUnauthorizedTo(['/login']))*/
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'tareas',
    component: TareasComponent
  },
  {
    path:'agregar-tarea',
    component: AgregarTareaComponent
  }


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
