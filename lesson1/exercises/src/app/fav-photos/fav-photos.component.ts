import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite photos';
  image1 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.18172-0/c70.0.206.206a/p206x206/13925727_10209241846136897_3055254852236800138_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=da31f3&_nc_ohc=6FU3PFlgbKAAX8BVE3f&_nc_ht=scontent-ort2-1.xx&tp=27&oh=3b622f5948955a0920d639c29adaa5eb&oe=60F74420';
  image2 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-0/c26.0.206.206a/p206x206/200345658_10159335938292910_2908594316625519696_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=da31f3&_nc_ohc=I8YM1bFPoJcAX9xS8dv&_nc_ht=scontent-ort2-1.xx&tp=27&oh=e07c915b522bce65f481a9dc9c95dce9&oe=60D59073';
  image3 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-0/c0.5.206.206a/p206x206/105517681_10158443481337910_7052554294878970278_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=da31f3&_nc_ohc=pxouLjUMOIEAX_2-_f9&_nc_ht=scontent-ort2-1.xx&tp=27&oh=ba6d487280fb5b8d43a4e8dc6312ad38&oe=60D5907F';

  constructor() { }

  ngOnInit() {
  }

}