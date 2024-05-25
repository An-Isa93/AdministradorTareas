import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../services/user';
import { UserService } from '../services/user.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private userService: UserService, private router: Router,  private alertController: AlertController, 
    private storage: Storage) {}
  user: User | null = null;
  imagen: string | undefined;

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      console.log('User observable emitted:', user);
      this.user = user;  
    });
    this.obtenerImagen();
  }

 async logout() {
    const alert = await this.alertController.create({
      message: 'Regresa pronto :D',
      buttons: ['Aceptar'],
    });

    await alert.present();
    this.userService.logout().then(() => {
      this.router.navigate(['login']);
    });
    
  }

  subirImagen($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `imagenes/${file.name}`); //se llama a la carpeta 'imagenes' en firebase

    uploadBytes (imgRef, file) //guarda la imagen en la carpeta
      .then(response => {
        console.log(response);
        this.actualizarImagen();
      })
      .catch(error => console.log(error));
  }

  obtenerImagen() {
    const imagenRef = ref(this.storage, `imagenes`); //se llama a la carpeta

    listAll(imagenRef) //se recuperan las imagenes de la carpeta 'imagenes'
    .then(async response => {
      console.log(response);
      //this.imagenes = []; //Limiar arregla antes de agregar una nueva imagen

      /*for(let item of response.items){ //se obtiene cada una de las imagenes subidas
        const url = await getDownloadURL(item); //obtaner la url de la imagen
        console.log(url);
        this.imagenes.push(url); //se añade la url al del arreglo 'imagenes'
      }*/
      if (response.items.length > 0) {
        const lastItem = response.items[response.items.length - 1];
        const url = await getDownloadURL(lastItem); // obtener la url de la última imagen
        console.log(url);
        this.imagen = url; // se asigna la url a 'imagen'
        
      }
    })
    .catch(error => console.log(error));
  }

  actualizarImagen() {
    this.obtenerImagen();
  }


}
