import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  @Output() showRegister: EventEmitter<boolean> = new EventEmitter<boolean>();
  formLogin: FormGroup;
  constructor(private userService: UserService, private router:Router ) { 
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {}
  onSubmit(){
    this.userService.login(this.formLogin.value)
    .then(response=>{
      console.log(response);
      this.router.navigate(['/home/tareas']);
     alert("login");
    })
    .catch(error => alert("Usuario o Contraseña incorrectas"));
  }
  loginWithGoogle(){
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/tareas']);
      })
      .catch(error => alert("Error"));
  }
  goToRegister() {
    this.router.navigate(['/registro']);
  }



}
