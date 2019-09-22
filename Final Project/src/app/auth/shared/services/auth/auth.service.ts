import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Store } from 'store';
import 'rxjs/add/operator/do';

export interface User {
    email: string,
    uid: string,
    authenticated: boolean
}

@Injectable()
export class AuthService {

    // this auth state reacts to any action 
    // made with firebase.

    // when we inmmediatly subscribe to it, its going
    // to return the current logged in usr. Meaning that
    // this is some sort of socket -def pending for confirmation-
    // that returns the current state, and reacts to any change
    // at the same time
    auth$ = this.af.authState
        .do(next => {
            
            // logout store update
            if (!next) {
                this.store.set('user', null);
                return;
            } 

            const user: User = {
                email: next.email,
                uid: next.uid,
                authenticated: true
            }
            
            // user log in
            this.store.set('user', user);
        })

    constructor(private af: AngularFireAuth, private store: Store) {}

    createUser(email: string, password: string) {
        return this.af.auth
            .createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string) {
        return this.af.auth
            .signInWithEmailAndPassword(email, password);
    }

    logOutUser() {
        return this.af.auth.signOut();
    }
}