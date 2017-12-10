//code below is from practical test-1. Jonas Kivikoski/1601557
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';


import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
 // below i have added firebase to my web app. Jonas Kivikoski/1601557
const firebaseAuth = {
  apiKey: "AIzaSyCe1ca0chtxaviGzPpMzC2HjSQezVaQs0U",
  authDomain: "test-1-77464.firebaseapp.com",
  databaseURL: "https://test-1-77464.firebaseio.com",
  projectId: "test-1-77464",
  storageBucket: "",
  messagingSenderId: "643295679470"
  };
 
@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseAuth),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}