import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   active: boolean = true;
   buttonColors: string[] = ['blue', 'magenta', '#b87333'];

   constructor() { }

   ngOnInit() {
   }

}
