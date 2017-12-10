//code below is from practical test-1. nothing changed. Jonas Kivikoski/1601557
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'   
})
export class MyApp {
  rootPage = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
     
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}