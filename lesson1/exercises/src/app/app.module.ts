import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
<<<<<<< HEAD
import { ChoresListComponent } from './chores-list/chores-list.component';
import { FavPhotosComponent } from './fav-photos/fav-photos.component';
=======
import { FavPhotosComponent } from './fav-photos/fav-photos.component';
import { ChoresListComponent } from './chores-list/chores-list.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { FavLinksComponent } from './fav-links/fav-links.component';
>>>>>>> bd292d7fa744c43d7a8cadf1f15b9f85ac04df93

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
<<<<<<< HEAD
    ChoresListComponent,
    FavPhotosComponent
=======
    FavPhotosComponent,
    ChoresListComponent,
    PageTitleComponent,
    FavLinksComponent
>>>>>>> bd292d7fa744c43d7a8cadf1f15b9f85ac04df93
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
