import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

    register({ email, password} : any) {
      return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login({email, password} : any) {
      return signInWithEmailAndPassword(this.auth, email, password);
    }

    loginWithGoogle(){
      return signInWithPopup(this.auth, new GoogleAuthProvider());
    }

    logout() {
      return signOut(this.auth);
    }

    
}
