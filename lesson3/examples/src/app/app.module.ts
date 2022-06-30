import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ButtonsComponent } from './buttons/buttons.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
=======
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ButtonsComponent } from './buttons/buttons.component';
>>>>>>> bd292d7fa744c43d7a8cadf1f15b9f85ac04df93

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ButtonsComponent,
    SkillSetComponent
=======
    SkillSetComponent,
    ButtonsComponent
>>>>>>> bd292d7fa744c43d7a8cadf1f15b9f85ac04df93
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
