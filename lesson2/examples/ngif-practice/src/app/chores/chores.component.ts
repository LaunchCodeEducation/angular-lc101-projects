import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [ 'Complete LaunchCode prep work'];
   finishedChores = ['Buy groceries', 'Empty dishwasher', 'Call mom', 'Vaccumm floors'];

   targetImage = 'https://www.dropbox.com/s/25tnlsvy5ubm16f/targetImage.gif?raw=1';

   constructor() { }

   ngOnInit() {
   }

}
