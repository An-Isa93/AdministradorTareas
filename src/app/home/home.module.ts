import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { TareasComponent } from '../tareas/tareas.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],

  declarations: [HomePage,TareasComponent,AgregarTareaComponent,LoginComponent,RegistroComponent]
})
export class HomePageModule {}
