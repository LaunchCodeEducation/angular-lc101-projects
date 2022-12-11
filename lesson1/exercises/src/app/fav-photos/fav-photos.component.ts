import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Images';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_ZFCn5UxHjcC-Ul1YvrQzd3nYJK6rXJrvg&usqp=CAU';
  image2 = 'https://www.rmg.co.uk/sites/default/files/styles/max_width_1440/public/2022-07/STScI-01G79RF5F5TPZJSDT3Y640XNQ1-southern-ring-nebula.jpg?itok=CLW7jhNZ';
  image3 = 'https://www.oberlo.com/media/1603969791-image-1.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}