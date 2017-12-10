import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { MyApp } from '../../app/app.component'; // new import added Jonas Kivikoski/1601557

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
  // Below i have added right names that u can navigate properly and new icons. Jonas Kivikoski/1601557
  pages: PageInterface[] = [
    {title: 'Personal Profile', pageName: 'PersonalPage', tabComponent: 'PersonalPage', index: 0, icon: 'ios-body'},
    {title: 'Personal Project', pageName: 'PersonalPage', tabComponent: 'PersonalProjectPage', index: 1, icon: 'ios-briefcase'},
    {title: 'Team Project', pageName: 'PersonalPage', tabComponent: 'TeamProjectPage', index: 2,  icon: 'md-briefcase'},
    {title: 'Technical Skills', pageName: 'PersonalPage', tabComponent: 'TechnicalPage', index: 3,  icon: 'ios-hammer'},
    {title: 'Soft Skills', pageName: 'PersonalPage', tabComponent: 'SoftPage', index: 4,  icon: 'ios-people'},
    {title: 'Extra Curriculum', pageName: 'PersonalPage', tabComponent: 'ExtraPage', index: 5,  icon: 'clipboard'},
    {title: 'Contact', pageName: 'PersonalPage', tabComponent: 'ContactPage', index: 6,  icon: 'contacts'},
  
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
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
  logout(){
    
    this.app.getRootNav().setRoot(MyApp);   // Logout root added. Jonas Kivikoski/1601557
} 
} 
