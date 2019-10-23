import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here Are Some Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://video-images.vice.com/articles/5d6d1bb2597b790008bc458a/lede/1567431776409-29978_122746394417349_2624601_n.jpeg?crop=1xw:0.8254xh;0xw,0.0522xh&resize=700:*';
  image3 = 'https://i.ytimg.com/vi/8DbfUvcD6tc/maxresdefault.jpg';

  constructor() { }

  ngOnInit() {
  }

}