import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string): void {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Logged in successfully');
        this.router.navigateByUrl('/dashboard');
      })
      .catch((err) => {
        console.log('Something went wrong', err.message);
      });
  }

  emailSingUp(email: string, password: string): void {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Singed up succesfully');
        this.router.navigateByUrl('/dashboard');
      })
      .catch((err) => {
        console.log('Something went wrnog', err.message);
      });
  }

  googleLogin() {
    const provider = new GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then((state) => {
        console.log('Logged in successfully ', state);
        this.router.navigateByUrl('/dashboard');
      })
      .catch((err) => {
        console.log('Something went wrong: ', err);
      });
  }
  oAuthLogin(provider: GoogleAuthProvider): Promise<any> {
    return this.afAuth.signInWithPopup(provider);
  }

  logOut(): void {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
