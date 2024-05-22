import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  formReg: FormGroup;
  constructor(private userService: UserService, private router:Router ) { 
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  title: string= "Registro";
  ngOnInit() {}
  onSubmit(){
    this.userService.register(this.formReg.value)
    .then(response=>{
      console.log(response);
      alert("Usuario Registrado");
      this.router.navigateByUrl('/login');

    })
    .catch(error => alert("error"));
  }


}
