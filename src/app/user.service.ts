import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedIn = false;
  constructor(private auth:Auth) {}
  register({email,password}:any){
    this.loggedIn = true;
    return createUserWithEmailAndPassword(this.auth,email, password);
  }

  login({email,password}:any){
    this.loggedIn = true;
    return signInWithEmailAndPassword(this.auth, email,password);
    
  }

  loginWithGoogle(){
    this.loggedIn = true;
    return signInWithPopup(this.auth, new GoogleAuthProvider());
   
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  
  

}
