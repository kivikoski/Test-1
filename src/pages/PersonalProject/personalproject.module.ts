import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalProjectPage } from './personalproject';

@NgModule({
  declarations: [
    PersonalProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalProjectPage),
  ],
})
export class PersonalProjectPageModule {}
