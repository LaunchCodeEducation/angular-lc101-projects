import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://old.launchcode.org/assets/dabomb-2080d6e23ef41463553f203daaa15991fd4c812676d0b098243b4941fcf4b57f.svg';
  image2 = 'https://mrhipster.com/wp/wp-content/uploads/2006/02/anchorman-1024x1536.jpg';
  image3 = 'https://image.tmdb.org/t/p/original/8xEVAe84zlL9rkfYT6dZXero4KK.jpg';

  constructor() { }

  ngOnInit() {
  }

}