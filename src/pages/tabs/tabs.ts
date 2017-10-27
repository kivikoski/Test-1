import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {   // Here i have also added root that navigation works in a right way. Jonas Kivikoski/1601557
  tab1Root='HomePage';
  tab2Root='ProjectWorkPage';
  tab3Root='TargetedCvPage';
  tab4Root='AboutPage';
  tab5Root='ExtraPage';
  tab6Root='ContactPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

} 