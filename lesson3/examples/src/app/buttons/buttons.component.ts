import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   bonusHeading: string = "Joke Buttons"
   inactive: boolean = false;
   isGoldInactive: boolean = false;
   isSilverActive: boolean = false;
   isCopperActive: boolean = false;
   isJoke1Active: boolean = false;
   location: string = 'center';

   constructor() { }

   ngOnInit() { }

   onClick(){
      if(this.isGoldInactive){
         return this.isGoldInactive = false;
      }else if(this.isSilverActive){
         return this.isSilverActive = false;
      }else 
         return this.isCopperActive = false;
   }
   
   shiftLocation(oldLocation: string) {
      while (this.location === oldLocation) {
         this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];
      }
      return this.location;
   }

}
