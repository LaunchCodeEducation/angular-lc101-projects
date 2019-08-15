import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'fav-photos',
   templateUrl: './fav-photos.component.html',
   styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
   photosTitle = 'Random Images';
   image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
   image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png';
   image3 = 'https://res.cloudinary.com/teepublic/image/private/s--V-1Uubx9--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1533021249/production/designs/2959908_0.jpg';

   constructor() { }

   ngOnInit() {
   }

}