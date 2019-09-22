import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from './auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/* 
  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js"></script>

  <!-- TODO: Add SDKs for Firebase products that you want to use
      https://firebase.google.com/docs/web/setup#available-libraries -->

  <script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBvpMH9MZoxjmNcbAotXjhRf1Bw6RjiUbc",
      authDomain: "fitness-app-4d086.firebaseapp.com",
      databaseURL: "https://fitness-app-4d086.firebaseio.com",
      projectId: "fitness-app-4d086",
      storageBucket: "fitness-app-4d086.appspot.com",
      messagingSenderId: "989694211797",
      appId: "1:989694211797:web:790cc7d370e890a8ff145c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  </script>
*/