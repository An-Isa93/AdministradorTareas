import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

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
      this.router.navigate(['tabs']);
      
     alert("login");
    })
    .catch(error => alert("Usuario o Contraseña incorrectas"));

  }
  loginWithGoogle(){
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/tabs/tab1']);
      })
      .catch(error => alert("Error"));
  }
  goToRegister() {
    this.router.navigate(['/registro']);
  }



}
