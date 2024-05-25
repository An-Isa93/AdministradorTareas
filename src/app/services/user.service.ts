import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private auth: Auth) {}

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

  isLoggedInObservable(): Observable<boolean> {
    return authState(this.auth).pipe(map(user => !!user));
  }

  getUser(): Observable<User | null> {
    return authState(this.auth).pipe(
      map(user => {
        if (user) {
          return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          };
        } else {
          return null;
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }
}
