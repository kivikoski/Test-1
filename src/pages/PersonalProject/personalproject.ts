//code below is from practical test-1 nothing changed. Jonas Kivikoski/1601557
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-personalproject',
  templateUrl: 'personalproject.html',
})
export class PersonalProjectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalProjectPage');
  }

}
