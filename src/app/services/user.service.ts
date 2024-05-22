import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { authState } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { signOut } from 'firebase/auth';

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
  logout(){
    return signOut(this.auth);
  }
  isLoggedInObservable(): Observable<boolean> {
    return authState(this.auth).pipe(map(user => !!user));
  }
  isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }
  
  
  

}
