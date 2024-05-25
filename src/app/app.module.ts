import { NgModule } from '@angular/core';
import { provideFirebaseApp, initializeApp as initializeApp_alias } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TareasComponent } from './tareas/tareas.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { provideStorage, getStorage } from '@angular/fire/storage'
defineCustomElements(window);
@NgModule({
  declarations: [AppComponent,LoginComponent,RegistroComponent, TareasComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideAuth(()=>getAuth()),
    provideFirebaseApp(() => initializeApp({"projectId":"login-a722a","appId":"1:254412298973:web:8784472266aed07642d934","storageBucket":"login-a722a.appspot.com","apiKey":"AIzaSyDuT75sNfgg2737dZ4ULGCxot7yCOhyc4g","authDomain":"login-a722a.firebaseapp.com","messagingSenderId":"254412298973","measurementId":"G-9TT3443T4P"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
