import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  url1='https://thumbs.dreamstime.com/b/mountains-flowers-blossom-sunrise-mountain-hills-beautiful-natural-landscape-summer-time-background-136448735.jpg';
  url2='https://thumbs.dreamstime.com/z/beautiful-summer-spring-meadow-blue-flowers-forget-me-nots-two-flying-butterflies-wild-nature-landscape-beautiful-182636005.jpg';
  favlinks=[this.url1,this.url2];
  constructor() { }

  ngOnInit() {
  }

}
