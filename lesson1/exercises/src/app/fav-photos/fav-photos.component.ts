import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'fav-photos',
   templateUrl: './fav-photos.component.html',
   styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
   photosTitle = 'Random Images';
   image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
   image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png';
   image3 = 'https://res.cloudinary.com/teepublic/image/private/s--V-1Uubx9--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1533021249/production/designs/2959908_0.jpg';

   constructor() { }

   ngOnInit() {
   }

}