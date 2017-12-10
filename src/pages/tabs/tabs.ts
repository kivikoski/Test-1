import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {   // Here i have also added root that navigation works in a right way. Jonas Kivikoski/1601557
  tab1Root='PersonalPage';
  tab2Root='PersonalProjectPage';
  tab3Root='TeamProjectPage';
  tab4Root='TechnicalPage';
  tab5Root='SoftPage';
  tab6Root='ExtraPage';
  tab7Root='ContactPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

} 