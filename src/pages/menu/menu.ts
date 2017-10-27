import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;
  // Below i have added right paths that u can navigate properly and new icons. Jonas Kivikoski/1601557
  pages: PageInterface[] = [
    {title: 'Home', pageName: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'home'},
    {title: 'ProjectWork', pageName: 'HomePage', tabComponent: 'ProjectWorkPage', index: 1, icon: 'ios-briefcase'},
    {title: 'Targetedcv', pageName: 'HomePage', tabComponent: 'TargetedcvPage', index: 2,  icon: 'list'},
    {title: 'About', pageName: 'HomePage', tabComponent: 'AboutPage', index: 3,  icon: 'analytics'},
    {title: 'Extra', pageName: 'HomePage', tabComponent: 'ExtraPage', index: 4,  icon: 'clipboard'},
    {title: 'Contact', pageName: 'HomePage', tabComponent: 'ContactPage', index: 5,  icon: 'contacts'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface){
let params ={};

if(page.index){
  params = {tabIndex: page.index};
}
if(this.nav.getActiveChildNav() && page.index != undefined) {
  this.nav.getActiveChildNav().select(page.index);
} else {
  this.nav.setRoot(page.pageName, params);
}
  }

    isActive(page: PageInterface){
      let childNav = this.nav.getActiveChildNav();

      if(childNav){
        if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
          return 'primary';
        }
        return;

      }
      if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
        return 'primary';
      }
  }

} 