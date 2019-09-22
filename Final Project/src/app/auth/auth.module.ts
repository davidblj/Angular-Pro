import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SharedModule } from './shared/shared.module';

export const firebaseConfig : FirebaseAppConfig = {
    apiKey: "AIzaSyBvpMH9MZoxjmNcbAotXjhRf1Bw6RjiUbc",
    authDomain: "fitness-app-4d086.firebaseapp.com",
    databaseURL: "https://fitness-app-4d086.firebaseio.com",
    projectId: "fitness-app-4d086",
    storageBucket: "fitness-app-4d086.appspot.com",
    messagingSenderId: "989694211797"
};

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login'},
            { path: 'login', loadChildren: './login/login.module#LoginModule'},
            { path: 'register', loadChildren: './register/register.module#RegisterModule'},
        ]
    }
]



@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig), 
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]    
})
export class AuthModule {}